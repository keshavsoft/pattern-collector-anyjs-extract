import fs from 'fs';
import path from 'path';

import defaultFunc from '../../../index.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

// const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const parseRegex = /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/;

// const searchString = /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm;

const searchString = /^[ \t]*router\.use\b.*?;/gm;

const k1 = defaultFunc({
    fileContent, parseRegex,
    searchRegex: searchString,
    showLog: false,
    showLogStep1: false
});

console.log("ssssssssss : ", k1);

