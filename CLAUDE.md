# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

"The Crossword": a pure static, no-build, no-dependency browser game (plain HTML/CSS/JS). It generates endless interlocking crosswords from a word database, scoped by Subject → Topic → Subtopic and hint difficulty. There is no package.json, linter, or test suite.

## Commands

- Run: open `index.html` directly, or `python3 -m http.server 8000`.
- Validate generator + database (run after editing `js/data.js` or `js/generator.js`):

```bash
node -e "
const { WORD_DB } = require('./js/data.js');
const Gen = require('./js/generator.js');
const puzzles = Gen.generateSet(WORD_DB, 42);
const errors = puzzles.flatMap(Gen.validateModel);
const placed = puzzles.reduce((n, p) => n + p.wordCount, 0);
console.log(puzzles.length + ' puzzles, ' + placed + '/' + WORD_DB.length + ' words placed');
console.log(errors.length === 0 ? 'OK' : errors);
"
```

A placed count lower than the DB size means entries were silently dropped by the sanitiser (non A–Z, >15 letters, duplicates).

## Architecture

Three scripts loaded by `index.html` as globals, in order: `js/data.js` → `js/generator.js` → `js/app.js`. `data.js` and `generator.js` use a UMD-style wrapper so they also work under Node `require` (used for validation); keep that dual-mode export when editing them.

- `js/data.js` — the database. Raw per-subject lists of `[WORD, topic, subtopic, [[difficulty, hint], ...]]` (difficulty 1/2/3 = Easy/Medium/Hard; multiple hints per level allowed, used for rotation across rounds). `normalise(list, subjectName)` tags each list with its subject and they're merged into `WORD_DB` at the bottom of the file. Adding a subject = new raw list + one line in that merge. Selector dropdowns are built from the data, so no UI changes are needed.
- `js/generator.js` — seeded (`mulberry32`) crossword generator. `generateSet(entries, seed)` builds puzzles on a max 15×15 grid: seeds with the longest word, greedily places words by crossing count via `findPlacements`/`evaluate`, retries 14 shuffles per puzzle keeping the best, and spills unplaced words into further puzzles so the whole scope is used. Hard constraints: words share at most one cell (perpendicular crossings only, no flush parallels), no fully filled 2×2 block. `toModel` produces the numbered/trimmed puzzle model; `validateModel` independently re-checks the constraints, so keep it in sync with any rule change in the placement logic.
- `js/app.js` — game state and UI: scope selectors, `createSet(isNewRound)` (new round = new seed + `pickHint` avoiding the previous round's hint), grid/clue rendering, selection/keyboard handling (including mobile soft-keyboard and `visualViewport` scrolling), check/reveal/clear, completion detection.
- `css/style.css` — newspaper-style theme with responsive rules (mobile stacks layout and pins the current clue).

`.claude/settings.local.json` is gitignored local config.
