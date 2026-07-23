# pattern-collector-anyjs-extract 🔍

> **A high-performance pattern extractor that scans text files and extracts structured group details from matches.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-extract.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-extract)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-extract.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-extract](https://www.npmjs.com/package/pattern-collector-anyjs-extract)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-extract](https://github.com/keshavsoft/pattern-collector-anyjs-extract)
*   📄 **Interactive Docs**: [keshavsoft.github.io/pattern-collector-anyjs-extract](https://keshavsoft.github.io/pattern-collector-anyjs-extract/)
*   ⚙️ **Publish Workflow**: [.github/workflows/npm-publish.yml](file:///d:/KeshavSoftRepos/2026-07-23(1)/pattern-collector-anyjs-extract/.github/workflows/npm-publish.yml)

---

## 📖 Overview

`pattern-collector-anyjs-extract` is a parser orchestration utility designed to locate specific text matches using a search regex and then extract metadata from each match using a capture-group parsing regex.

Under the hood, it:
1. Uses [`pattern-collector-anyjs-matches`](https://www.npmjs.com/package/pattern-collector-anyjs-matches) to search the text and track line numbers.
2. Uses [`pattern-collector-base-regex`](https://www.npmjs.com/package/pattern-collector-base-regex) on each line matched to isolate `variable` and `folderName` fields.

This orchestrator enables highly-flexible static code analysis for route imports, dependency mapping, dynamic file linking, and key configuration audits.

---

## ✨ Features

*   **⚡ Zero External Dependencies**: Using only standard internal/peer pattern-collector ecosystem modules.
*   **🧩 Dual-Regex Orchestration**: Separate search regex and parse regex configurations for maximum flexibility.
*   **📦 ESM Native**: Built for modern ES module environments.
*   **🏷️ Structured Outputs**: Isolates variable names, folder names, original line contents, and line numbers.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-extract
```

---

## 🔗 Dependency Chain

*   [`pattern-collector-anyjs-matches`](https://www.npmjs.com/package/pattern-collector-anyjs-matches) - listed in [`package.json`](package.json) as `^1.2.1`.
*   [`pattern-collector-base-regex`](https://www.npmjs.com/package/pattern-collector-base-regex) - listed in [`package.json`](package.json) as `^1.2.1`.

---

## 🛠️ API Reference

### `default(options)`

#### Parameters

An options object containing:

*   **`fileContent`** `(string)`: The raw text or source code to analyze.
*   **`searchRegex`** `(RegExp)`: A regular expression with the global (`g`) flag to find matching lines.
*   **`parseRegex`** `(RegExp)`: A capturing regular expression used to extract `variable` (group 1) and `folderName` (group 2) from each matched line.
*   **`showLog`** `(boolean)` *(optional)*: Enable debug console logs.
*   **`showLogStep1`** `(boolean)` *(optional)*: Enable deep step-by-step logs for regex matching.

#### Returns

*   `Object[]`: An array of successfully matched and parsed objects, where each object contains:
    *   `variable` `(string)`: The value captured in group 1.
    *   `folderName` `(string)`: The value captured in group 2.
    *   `line` `(string)`: The full line of text matching the search regex.
    *   `lineNumber` `(number)`: The 1-indexed line number in the source file.

---

## 💻 Usage Example

```javascript
import pullExtract from 'pattern-collector-anyjs-extract';

const code = `
import { router as routerFromv1 } from "./v1/routes.js";
import { router as routerFromv2 } from "./v2/routes.js";
const test = 123;
`;

const result = pullExtract({
  fileContent: code,
  searchRegex: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm,
  parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/
});

console.log(result);
/*
Output:
[
  {
    variable: 'routerFromv1',
    folderName: 'v1',
    line: 'import { router as routerFromv1 } from "./v1/routes.js";',
    lineNumber: 2
  },
  {
    variable: 'routerFromv2',
    folderName: 'v2',
    line: 'import { router as routerFromv2 } from "./v2/routes.js";',
    lineNumber: 3
  }
]
*/
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
