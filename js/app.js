/* ============================================================
 * The Crossword — game UI
 * Wires the word database + generator into a playable page.
 * ============================================================ */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  const state = {
    round: 0,
    puzzles: [],
    idx: 0,
    model: null,
    user: [],        // user letters, rows x cols ("" = empty)
    cellEls: [],     // DOM refs
    active: null,    // {r, c, dir}
    solved: [],      // per-puzzle solved flags
    lastHint: {},    // word -> last hint text shown (vary across rounds)
    filters: null,
  };

  /* ---------- setup controls ---------- */
  /* Subject -> Topic -> Subtopic selectors cascade; each level offers ALL. */

  function populateSelectors() {
    const subjSel = $("#subject");
    for (const s of [...new Set(WORD_DB.map((e) => e.subject))]) subjSel.add(new Option(s, s));
    subjSel.addEventListener("change", populateTopics);
    $("#topic").addEventListener("change", populateSubtopics);
    populateTopics();
  }

  function populateTopics() {
    const subject = $("#subject").value;
    const topicSel = $("#topic");
    topicSel.innerHTML = "";
    topicSel.add(new Option("All topics", "ALL"));
    const topics = [...new Set(
      WORD_DB.filter((e) => subject === "ALL" || e.subject === subject).map((e) => e.topic)
    )];
    for (const t of topics) topicSel.add(new Option(t, t));
    populateSubtopics();
  }

  function populateSubtopics() {
    const subject = $("#subject").value;
    const topic = $("#topic").value;
    const subSel = $("#subtopic");
    subSel.innerHTML = "";
    subSel.add(new Option("All subtopics", "ALL"));
    const subs = [...new Set(
      WORD_DB.filter(
        (e) => (subject === "ALL" || e.subject === subject) && (topic === "ALL" || e.topic === topic)
      ).map((e) => e.subtopic)
    )];
    for (const s of subs) subSel.add(new Option(s, s));
    updateScopeCount();
  }

  function filteredEntries() {
    const subject = $("#subject").value;
    const topic = $("#topic").value;
    const sub = $("#subtopic").value;
    return WORD_DB.filter(
      (e) =>
        (subject === "ALL" || e.subject === subject) &&
        (topic === "ALL" || e.topic === topic) &&
        (sub === "ALL" || e.subtopic === sub)
    );
  }

  function updateScopeCount() {
    $("#scopeCount").textContent = filteredEntries().length + " words in scope";
  }

  /* ---------- hints ---------- */

  function pickHint(entry, diff) {
    let cands = entry.hints;
    if (diff !== "ALL") {
      const lvl = +diff;
      const atLevel = cands.filter((h) => h.level === lvl);
      if (atLevel.length) cands = atLevel;
      else {
        // nearest difficulty as fallback
        const best = Math.min(...cands.map((h) => Math.abs(h.level - lvl)));
        cands = cands.filter((h) => Math.abs(h.level - lvl) === best);
      }
    }
    // avoid repeating last round's hint when an alternative exists
    const last = state.lastHint[entry.word];
    const fresh = cands.filter((h) => h.text !== last);
    const pool = fresh.length ? fresh : cands;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    state.lastHint[entry.word] = chosen.text;
    return chosen;
  }

  /* ---------- round / set creation ---------- */

  function createSet(isNewRound) {
    const entries = filteredEntries();
    if (entries.length < 2) {
      $("#scopeCount").textContent = "Pick a wider scope — need at least 2 words.";
      return;
    }
    state.filters = { diff: $("#difficulty").value };
    state.round = isNewRound ? state.round + 1 : 1;
    const seed = (Math.random() * 0x7fffffff) | 0;
    state.puzzles = CrosswordGen.generateSet(entries, seed);
    for (const p of state.puzzles) {
      for (const clue of p.clues) {
        const h = pickHint(clue.entry, state.filters.diff);
        clue.hint = h.text;
        clue.level = h.level;
      }
    }
    state.solved = state.puzzles.map(() => false);
    $("#game").hidden = false;
    $("#roundDone").hidden = true;
    loadPuzzle(0);
    $("#game").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- puzzle rendering ---------- */

  function loadPuzzle(idx) {
    state.idx = idx;
    state.model = state.puzzles[idx];
    state.user = Array.from({ length: state.model.rows }, () =>
      Array(state.model.cols).fill("")
    );
    state.active = null;
    renderGrid();
    renderClues();
    updateStatus();
    setSolvedOverlay(state.solved[idx]);
    // select the first clue to start
    const first = state.model.clues[0];
    if (first) setActive(first.cells[0].r, first.cells[0].c, first.dir);
  }

  function renderGrid() {
    const m = state.model;
    const gridEl = $("#grid");
    gridEl.innerHTML = "";
    gridEl.style.setProperty("--cols", m.cols);
    gridEl.style.setProperty("--rows", m.rows);
    state.cellEls = [];
    for (let r = 0; r < m.rows; r++) {
      state.cellEls.push([]);
      for (let c = 0; c < m.cols; c++) {
        const cell = m.cells[r][c];
        const el = document.createElement("div");
        el.className = cell ? "cell" : "cell void";
        if (cell) {
          if (cell.num) {
            const n = document.createElement("span");
            n.className = "num";
            n.textContent = cell.num;
            el.appendChild(n);
          }
          const letter = document.createElement("span");
          letter.className = "letter";
          el.appendChild(letter);
          el.addEventListener("pointerdown", (ev) => {
            ev.preventDefault();
            onCellTap(r, c);
          });
        }
        gridEl.appendChild(el);
        state.cellEls[r].push(el);
      }
    }
  }

  function renderClues() {
    for (const dir of ["A", "D"]) {
      const list = $(dir === "A" ? "#acrossList" : "#downList");
      list.innerHTML = "";
      for (const clue of state.model.clues.filter((cl) => cl.dir === dir)) {
        const li = document.createElement("li");
        li.dataset.number = clue.number;
        li.dataset.dir = clue.dir;
        li.innerHTML =
          `<b>${clue.number}</b> <span class="lvl lvl${clue.level}" title="${DIFFICULTY_NAMES[clue.level]}">` +
          `${DIFFICULTY_NAMES[clue.level][0]}</span> ${clue.hint} ` +
          `<span class="len">(${clue.word.length})</span>`;
        li.addEventListener("click", () => {
          const target = clue.cells.find((cc) => !state.user[cc.r][cc.c]) || clue.cells[0];
          setActive(target.r, target.c, clue.dir);
          focusKeyboard();
        });
        list.appendChild(li);
      }
    }
  }

  function updateStatus() {
    $("#statusRound").textContent = "Round " + state.round;
    $("#statusPuzzle").textContent = `Puzzle ${state.idx + 1} of ${state.puzzles.length}`;
    $("#statusWords").textContent = state.model.wordCount + " words";
    $("#prevBtn").disabled = state.idx === 0;
    $("#nextBtn").disabled = state.idx === state.puzzles.length - 1;
    const solvedCount = state.solved.filter(Boolean).length;
    $("#statusSolved").textContent = solvedCount + " solved";
  }

  /* ---------- selection & movement ---------- */

  function clueAt(r, c, dir) {
    return state.model.clues.find(
      (cl) => cl.dir === dir && cl.cells.some((cc) => cc.r === r && cc.c === c)
    );
  }

  function onCellTap(r, c) {
    const a = state.active;
    if (a && a.r === r && a.c === c) {
      const other = a.dir === "A" ? "D" : "A";
      if (clueAt(r, c, other)) setActive(r, c, other);
    } else {
      let dir = a ? a.dir : "A";
      if (!clueAt(r, c, dir)) dir = dir === "A" ? "D" : "A";
      setActive(r, c, dir);
    }
    focusKeyboard();
  }

  function setActive(r, c, dir) {
    if (!state.model.cells[r][c]) return;
    if (!clueAt(r, c, dir)) dir = dir === "A" ? "D" : "A";
    state.active = { r, c, dir };
    paintSelection();
    ensureCellVisible();
  }

  /* Keep the active cell inside the *visible* viewport — on phones the
   * soft keyboard eats half the screen, which visualViewport reports. */
  function ensureCellVisible() {
    const a = state.active;
    if (!a) return;
    const rect = state.cellEls[a.r][a.c].getBoundingClientRect();
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    if (rect.top < 56 || rect.bottom > vh - 16) {
      state.cellEls[a.r][a.c].scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }

  function paintSelection() {
    const m = state.model;
    for (let r = 0; r < m.rows; r++)
      for (let c = 0; c < m.cols; c++)
        state.cellEls[r][c].classList.remove("sel", "word");

    document.querySelectorAll(".clues li.active").forEach((el) => el.classList.remove("active"));

    const a = state.active;
    if (!a) return;
    const clue = clueAt(a.r, a.c, a.dir);
    if (clue) {
      for (const cc of clue.cells) state.cellEls[cc.r][cc.c].classList.add("word");
      const li = document.querySelector(
        `.clues li[data-number="${clue.number}"][data-dir="${clue.dir}"]`
      );
      if (li) {
        li.classList.add("active");
        // Only auto-scroll the clue list when it scrolls internally
        // (desktop side-column). On phones the lists sit in the page
        // flow below the grid, and scrolling to them would yank the
        // page away from the squares the user is typing into.
        if (li.parentElement.scrollHeight > li.parentElement.clientHeight + 4) {
          li.scrollIntoView({ block: "nearest" });
        }
      }
      $("#currentClue").innerHTML =
        `<b>${clue.number} ${clue.dir === "A" ? "Across" : "Down"}</b> · ${clue.hint}`;
    }
    state.cellEls[a.r][a.c].classList.add("sel");
  }

  function moveWithinWord(step) {
    const a = state.active;
    const clue = clueAt(a.r, a.c, a.dir);
    if (!clue) return;
    const i = clue.cells.findIndex((cc) => cc.r === a.r && cc.c === a.c);
    const next = clue.cells[i + step];
    if (next) setActive(next.r, next.c, a.dir);
  }

  function moveCursor(dr, dc) {
    const a = state.active;
    const wantDir = dr !== 0 ? "D" : "A";
    if (a.dir !== wantDir && clueAt(a.r, a.c, wantDir)) {
      setActive(a.r, a.c, wantDir); // first press turns the cursor
      return;
    }
    let { r, c } = a;
    const m = state.model;
    do {
      r += dr; c += dc;
    } while (r >= 0 && r < m.rows && c >= 0 && c < m.cols && !m.cells[r][c]);
    if (r >= 0 && r < m.rows && c >= 0 && c < m.cols) setActive(r, c, a.dir);
  }

  function nextClue(step) {
    const a = state.active;
    const clues = state.model.clues;
    const cur = clues.indexOf(clueAt(a.r, a.c, a.dir));
    const nxt = clues[(cur + step + clues.length) % clues.length];
    const target = nxt.cells.find((cc) => !state.user[cc.r][cc.c]) || nxt.cells[0];
    setActive(target.r, target.c, nxt.dir);
  }

  /* ---------- typing ---------- */

  function setLetter(r, c, ch) {
    state.user[r][c] = ch;
    const el = state.cellEls[r][c];
    el.querySelector(".letter").textContent = ch;
    el.classList.remove("wrong", "revealed-flash");
  }

  function handleChar(ch) {
    if (!state.active || state.solved[state.idx]) return;
    ch = ch.toUpperCase();
    if (!/^[A-Z]$/.test(ch)) return;
    const { r, c } = state.active;
    setLetter(r, c, ch);
    moveWithinWord(1);
    checkCompletion();
  }

  function handleBackspace() {
    if (!state.active || state.solved[state.idx]) return;
    const { r, c } = state.active;
    if (state.user[r][c]) {
      setLetter(r, c, "");
    } else {
      moveWithinWord(-1);
      const a = state.active;
      setLetter(a.r, a.c, "");
    }
  }

  function handleKey(ev) {
    if ($("#game").hidden || !state.model) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "SELECT") return;
    const k = ev.key;
    if (k === "ArrowLeft") { moveCursor(0, -1); ev.preventDefault(); }
    else if (k === "ArrowRight") { moveCursor(0, 1); ev.preventDefault(); }
    else if (k === "ArrowUp") { moveCursor(-1, 0); ev.preventDefault(); }
    else if (k === "ArrowDown") { moveCursor(1, 0); ev.preventDefault(); }
    else if (k === "Backspace") { handleBackspace(); ev.preventDefault(); }
    else if (k === " ") {
      const a = state.active;
      if (a) setActive(a.r, a.c, a.dir === "A" ? "D" : "A");
      ev.preventDefault();
    }
    else if (k === "Tab") { nextClue(ev.shiftKey ? -1 : 1); ev.preventDefault(); }
    else if (/^[a-zA-Z]$/.test(k) && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
      handleChar(k);
      ev.preventDefault();
    }
  }

  /* hidden input summons the soft keyboard on touch devices */
  function focusKeyboard() {
    const kb = $("#kbd");
    kb.value = "";
    kb.focus({ preventScroll: true });
  }

  /* ---------- check / reveal / clear ---------- */

  function checkPuzzle() {
    const m = state.model;
    for (let r = 0; r < m.rows; r++)
      for (let c = 0; c < m.cols; c++) {
        const cell = m.cells[r][c];
        if (cell && state.user[r][c] && state.user[r][c] !== cell.sol) {
          state.cellEls[r][c].classList.add("wrong");
        }
      }
  }

  function revealLetter() {
    if (!state.active || state.solved[state.idx]) return;
    const { r, c } = state.active;
    setLetter(r, c, state.model.cells[r][c].sol);
    state.cellEls[r][c].classList.add("revealed-flash");
    moveWithinWord(1);
    checkCompletion();
  }

  function revealWord() {
    if (!state.active || state.solved[state.idx]) return;
    const a = state.active;
    const clue = clueAt(a.r, a.c, a.dir);
    for (const cc of clue.cells) {
      setLetter(cc.r, cc.c, state.model.cells[cc.r][cc.c].sol);
      state.cellEls[cc.r][cc.c].classList.add("revealed-flash");
    }
    checkCompletion();
  }

  function clearPuzzle() {
    if (state.solved[state.idx]) return;
    const m = state.model;
    for (let r = 0; r < m.rows; r++)
      for (let c = 0; c < m.cols; c++)
        if (m.cells[r][c]) setLetter(r, c, "");
  }

  /* ---------- completion ---------- */

  function markDoneClues() {
    for (const clue of state.model.clues) {
      const done = clue.cells.every((cc) => state.user[cc.r][cc.c] === state.model.cells[cc.r][cc.c].sol);
      const li = document.querySelector(`.clues li[data-number="${clue.number}"][data-dir="${clue.dir}"]`);
      if (li) li.classList.toggle("done", done);
    }
  }

  function checkCompletion() {
    markDoneClues();
    const m = state.model;
    let full = true, correct = true;
    for (let r = 0; r < m.rows; r++)
      for (let c = 0; c < m.cols; c++) {
        const cell = m.cells[r][c];
        if (!cell) continue;
        if (!state.user[r][c]) full = false;
        else if (state.user[r][c] !== cell.sol) correct = false;
      }
    if (!full) { $("#nudge").textContent = ""; return; }
    if (!correct) {
      $("#nudge").textContent = "The grid is full but something's off — try “Check”.";
      return;
    }
    $("#nudge").textContent = "";
    onSolved();
  }

  function onSolved() {
    state.solved[state.idx] = true;
    updateStatus();
    setSolvedOverlay(true);
    if (state.solved.every(Boolean)) {
      $("#roundDone").hidden = false;
      $("#roundDoneText").textContent =
        `All ${state.puzzles.length} puzzles of round ${state.round} solved. ` +
        `A new round brings fresh layouts and different clues.`;
    }
  }

  function setSolvedOverlay(on) {
    $("#gridWrap").classList.toggle("is-solved", on);
    const lastUnsolved = state.solved.every(Boolean);
    $("#solvedNext").hidden = !on || lastUnsolved;
  }

  /* ---------- wiring ---------- */

  function init() {
    populateSelectors();
    $("#subtopic").addEventListener("change", updateScopeCount);
    $("#createBtn").addEventListener("click", () => createSet(false));
    $("#newRoundBtn").addEventListener("click", () => createSet(true));
    $("#prevBtn").addEventListener("click", () => loadPuzzle(state.idx - 1));
    $("#nextBtn").addEventListener("click", () => loadPuzzle(state.idx + 1));
    $("#solvedNext").addEventListener("click", () => {
      const next = state.solved.findIndex((s) => !s);
      if (next >= 0) loadPuzzle(next);
    });
    $("#checkBtn").addEventListener("click", checkPuzzle);
    $("#revealLetterBtn").addEventListener("click", revealLetter);
    $("#revealWordBtn").addEventListener("click", revealWord);
    $("#clearBtn").addEventListener("click", clearPuzzle);

    // Single handler for physical keyboards. It preventDefault()s on the
    // keys it consumes, which also stops the hidden input from receiving
    // them — so the "input" listener below only sees soft-keyboard text
    // whose keydown arrived as "Unidentified".
    document.addEventListener("keydown", handleKey);
    const kb = $("#kbd");
    kb.addEventListener("input", () => {
      const v = kb.value;
      kb.value = "";
      if (v) handleChar(v[v.length - 1]);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
