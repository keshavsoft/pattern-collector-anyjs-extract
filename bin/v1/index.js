import getAllMatches from "pattern-collector-anyjs-import";
import extractVariable from "pattern-collector-base-regex";

const showLog = false;

const startFunc = ({ fileContent, parseRegex, searchRegex,
    inShowLog, showLogStep1 }) => {

    const matches = getAllMatches({
        fileContent, searchRegex,
        showLog: showLogStep1
    });

    if (inShowLog) console.log("matches : ", matches);
    if (showLog) console.log("matches : ", matches);

    return matches.map(match => {
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
                line: match.line,
                lineNumber: match.lineNumber
            };
        };

        return null;

    }).filter(Boolean);
};

export default startFunc;