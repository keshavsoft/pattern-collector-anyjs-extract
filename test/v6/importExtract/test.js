import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

import defaultFunc from '../../../index.js';

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const searchString = /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm;

const k1 = defaultFunc({
    fileContent, parseRegex,
    searchRegex: searchString,
    showLog: {
        keysOnly: true,
        withValues: true
    },
    showLogStep1: {
        keysOnly: true,
        withValues: true
    }
});

console.log("ssssssssss : ", k1);

