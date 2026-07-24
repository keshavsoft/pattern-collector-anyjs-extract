import getAllMatches from "pattern-collector-anyjs-matches";
import extractVariable from "pattern-collector-base-regex";

import packageJson from '../../package.json' with {type: 'json'};

const startFunc = ({ fileContent, parseRegex, searchRegex,
    showLog, showLogStep1 }) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);

    const matches = getAllMatches({
        fileContent, searchRegex,
        showLog: showLogStep1
    });

    if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, matches);

    const allMatches = matches.map(match => {
        const clean = match.line.replace(/[\r\n]/g, '');

        const returnVariable = extractVariable({
            matchLine: match.line,
            parseRegex,
            showLog: showLogStep1
        });

        if (returnVariable) {
            return {
                variable: returnVariable.variable,
                folderName: returnVariable.folderName,
                raka: returnVariable.raka,
                poka: returnVariable.poka,
                line: match.line,
                lineNumber: match.lineNumber
            };
        };

        return null;

    }).filter(Boolean);

    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, allMatches);

    return allMatches;
};

export default startFunc;