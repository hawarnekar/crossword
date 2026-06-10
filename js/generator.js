/* ============================================================
 * Crossword generator (criss-cross style)
 * ------------------------------------------------------------
 * Constraints enforced:
 *  - Grid is at most 15 x 15; words at most 15 letters.
 *  - Any two words may share at most ONE cell (a single common
 *    letter at a perpendicular crossing). Same-direction overlap
 *    is forbidden via a per-cell direction mask.
 *  - No 2x2 window of the grid may contain 4 filled cells.
 *  - Placement greedily maximises crossings; several random
 *    restarts are tried and the densest layout wins.
 *  - Words that cannot be placed spill over into the next puzzle,
 *    so the full selection is always consumed across a set.
 * ============================================================ */

(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.CrosswordGen = factory();
})(typeof self !== "undefined" ? self : this, function () {
  const SIZE = 15;
  const ACROSS = 1; // bit flags for the direction mask
  const DOWN = 2;
  const RESTARTS = 14; // random layouts tried per puzzle; best one wins

  /* Deterministic PRNG so a "round" can be reseeded for variety */
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function emptyGrid() {
    return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
  }

  function shuffled(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---- placement validation -------------------------------- */

  function cellFilled(grid, r, c) {
    return r >= 0 && r < SIZE && c >= 0 && c < SIZE && grid[r][c] !== null;
  }

  /* Check every 2x2 window touching the candidate word, counting
   * both existing cells and the cells the word would add. */
  function violates2x2(grid, word, row, col, dir) {
    const newCells = new Set();
    for (let i = 0; i < word.length; i++) {
      const r = dir === "A" ? row : row + i;
      const c = dir === "A" ? col + i : col;
      newCells.add(r * SIZE + c);
    }
    const filled = (r, c) =>
      cellFilled(grid, r, c) ||
      (r >= 0 && r < SIZE && c >= 0 && c < SIZE && newCells.has(r * SIZE + c));

    const r0min = row - 1;
    const r0max = dir === "A" ? row : row + word.length - 1;
    const c0min = col - 1;
    const c0max = dir === "A" ? col + word.length - 1 : col;
    for (let r0 = r0min; r0 <= r0max; r0++) {
      for (let c0 = c0min; c0 <= c0max; c0++) {
        if (filled(r0, c0) && filled(r0, c0 + 1) && filled(r0 + 1, c0) && filled(r0 + 1, c0 + 1)) {
          return true;
        }
      }
    }
    return false;
  }

  /* Returns {crossings} if word can sit at (row,col,dir), else null. */
  function evaluate(grid, dirMask, word, row, col, dir, requireCross) {
    const len = word.length;
    const dirBit = dir === "A" ? ACROSS : DOWN;
    if (dir === "A") {
      if (row < 0 || row >= SIZE || col < 0 || col + len > SIZE) return null;
      if (cellFilled(grid, row, col - 1) || cellFilled(grid, row, col + len)) return null;
    } else {
      if (col < 0 || col >= SIZE || row < 0 || row + len > SIZE) return null;
      if (cellFilled(grid, row - 1, col) || cellFilled(grid, row + len, col)) return null;
    }

    let crossings = 0;
    for (let i = 0; i < len; i++) {
      const r = dir === "A" ? row : row + i;
      const c = dir === "A" ? col + i : col;
      const existing = grid[r][c];
      if (existing !== null) {
        if (existing !== word[i]) return null; // letter clash
        if (dirMask[r][c] & dirBit) return null; // same-direction overlap => >1 shared cell
        crossings++;
      } else {
        // a fresh cell may not sit flush against a parallel word
        if (dir === "A") {
          if (cellFilled(grid, r - 1, c) || cellFilled(grid, r + 1, c)) return null;
        } else {
          if (cellFilled(grid, r, c - 1) || cellFilled(grid, r, c + 1)) return null;
        }
      }
    }
    if (requireCross && crossings === 0) return null;
    if (violates2x2(grid, word, row, col, dir)) return null;
    return { crossings };
  }

  function commit(state, entry, row, col, dir) {
    const { grid, dirMask, placements } = state;
    const word = entry.word;
    const dirBit = dir === "A" ? ACROSS : DOWN;
    for (let i = 0; i < word.length; i++) {
      const r = dir === "A" ? row : row + i;
      const c = dir === "A" ? col + i : col;
      grid[r][c] = word[i];
      dirMask[r][c] |= dirBit;
    }
    placements.push({ entry, word, row, col, dir });
  }

  /* All legal crossing placements for a word on the current grid. */
  function findPlacements(state, word) {
    const { grid, dirMask } = state;
    const out = [];
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const ch = grid[r][c];
        if (ch === null) continue;
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== ch) continue;
          // word crossing this cell vertically (cell is i-th letter)
          let res = evaluate(grid, dirMask, word, r - i, c, "D", true);
          if (res) out.push({ row: r - i, col: c, dir: "D", crossings: res.crossings });
          res = evaluate(grid, dirMask, word, r, c - i, "A", true);
          if (res) out.push({ row: r, col: c - i, dir: "A", crossings: res.crossings });
        }
      }
    }
    return out;
  }

  function boundsOf(placements) {
    let rmin = SIZE, rmax = -1, cmin = SIZE, cmax = -1;
    for (const p of placements) {
      const r2 = p.dir === "D" ? p.row + p.word.length - 1 : p.row;
      const c2 = p.dir === "A" ? p.col + p.word.length - 1 : p.col;
      rmin = Math.min(rmin, p.row); rmax = Math.max(rmax, r2);
      cmin = Math.min(cmin, p.col); cmax = Math.max(cmax, c2);
    }
    return { rmin, rmax, cmin, cmax };
  }

  /* ---- single puzzle build ---------------------------------- */

  function buildPuzzle(entries, rng) {
    const state = { grid: emptyGrid(), dirMask: emptyGrid().map((r) => r.map(() => 0)), placements: [] };

    // longest-first with random tiebreak gives dense skeletons
    const order = shuffled(entries, rng).sort((a, b) => b.word.length - a.word.length);
    const seed = order[0];
    const dir = rng() < 0.5 ? "A" : "D";
    const offset = Math.floor((SIZE - seed.word.length) / 2);
    const mid = Math.floor(SIZE / 2);
    if (dir === "A") commit(state, seed, mid, offset, "A");
    else commit(state, seed, offset, mid, "D");

    let pool = order.slice(1);
    let progress = true;
    let totalCrossings = 0;
    while (progress && pool.length) {
      progress = false;
      const next = [];
      for (const entry of pool) {
        const cands = findPlacements(state, entry.word);
        if (!cands.length) { next.push(entry); continue; }
        // maximise crossings, then keep the layout compact
        let best = null, bestScore = -Infinity;
        for (const cand of cands) {
          const span = Math.max(
            Math.abs(cand.row - mid), Math.abs(cand.col - mid));
          const score = cand.crossings * 100 - span + rng() * 2;
          if (score > bestScore) { bestScore = score; best = cand; }
        }
        commit(state, entry, best.row, best.col, best.dir);
        totalCrossings += best.crossings;
        progress = true;
      }
      pool = next;
    }
    return { state, unused: pool, crossings: totalCrossings };
  }

  /* ---- numbering + model for the UI -------------------------- */

  function toModel(state) {
    const { grid, placements } = state;
    const b = boundsOf(placements);
    const rows = b.rmax - b.rmin + 1;
    const cols = b.cmax - b.cmin + 1;

    const startMap = {}; // "r,c" -> number
    let num = 0;
    for (let r = b.rmin; r <= b.rmax; r++) {
      for (let c = b.cmin; c <= b.cmax; c++) {
        if (grid[r][c] === null) continue;
        const startsA = !cellFilled(grid, r, c - 1) && cellFilled(grid, r, c + 1);
        const startsD = !cellFilled(grid, r - 1, c) && cellFilled(grid, r + 1, c);
        if (startsA || startsD) startMap[r + "," + c] = ++num;
      }
    }

    const clues = placements.map((p) => ({
      number: startMap[p.row + "," + p.col],
      dir: p.dir,
      word: p.word,
      entry: p.entry,
      row: p.row - b.rmin,
      col: p.col - b.cmin,
      cells: Array.from({ length: p.word.length }, (_, i) => ({
        r: (p.dir === "D" ? p.row + i : p.row) - b.rmin,
        c: (p.dir === "A" ? p.col + i : p.col) - b.cmin,
      })),
    }));
    clues.sort((a, b2) => a.number - b2.number || (a.dir === "A" ? -1 : 1));

    const cells = [];
    for (let r = 0; r < rows; r++) {
      cells.push([]);
      for (let c = 0; c < cols; c++) {
        const g = grid[r + b.rmin][c + b.cmin];
        cells[r].push(g === null ? null : { sol: g, num: startMap[(r + b.rmin) + "," + (c + b.cmin)] || null });
      }
    }
    return { rows, cols, cells, clues, wordCount: placements.length };
  }

  /* ---- public API -------------------------------------------- */

  /**
   * Build a full set of puzzles consuming (nearly) all entries.
   * entries: [{word, ...}], seed: integer
   * Returns array of puzzle models.
   */
  function generateSet(entries, seed) {
    const rng = mulberry32(seed || (Date.now() & 0xffffffff));
    // sanitise: A-Z only, <=15 letters, dedupe by word
    const seen = new Set();
    let remaining = entries.filter((e) => {
      const w = e.word;
      if (!/^[A-Z]{2,15}$/.test(w) || seen.has(w)) return false;
      seen.add(w);
      return true;
    });

    const puzzles = [];
    while (remaining.length) {
      let best = null;
      for (let k = 0; k < RESTARTS; k++) {
        const attempt = buildPuzzle(remaining, rng);
        if (
          !best ||
          attempt.state.placements.length > best.state.placements.length ||
          (attempt.state.placements.length === best.state.placements.length &&
            attempt.crossings > best.crossings)
        ) {
          best = attempt;
        }
      }
      puzzles.push(toModel(best.state));
      if (best.unused.length === remaining.length) break; // safety, cannot happen (seed always placed)
      remaining = best.unused;
    }
    return puzzles;
  }

  /* Verifies invariants — used by tests and as a dev guard. */
  function validateModel(model) {
    const errs = [];
    if (model.rows > SIZE || model.cols > SIZE) errs.push("grid exceeds 15x15");
    const filled = (r, c) =>
      r >= 0 && r < model.rows && c >= 0 && c < model.cols && model.cells[r][c] !== null;
    for (let r = -1; r < model.rows; r++) {
      for (let c = -1; c < model.cols; c++) {
        if (filled(r, c) && filled(r, c + 1) && filled(r + 1, c) && filled(r + 1, c + 1)) {
          errs.push(`2x2 violation at ${r},${c}`);
        }
      }
    }
    // pairwise overlap <= 1 shared cell
    const key = (p) => p.cells.map((x) => x.r + "," + x.c);
    for (let i = 0; i < model.clues.length; i++) {
      for (let j = i + 1; j < model.clues.length; j++) {
        const a = new Set(key(model.clues[i]));
        const shared = key(model.clues[j]).filter((k) => a.has(k));
        if (shared.length > 1) {
          errs.push(`words ${model.clues[i].word}/${model.clues[j].word} share ${shared.length} cells`);
        }
      }
    }
    return errs;
  }

  return { generateSet, validateModel, SIZE };
});
