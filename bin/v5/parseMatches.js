import extractVariable from "pattern-collector-base-regex-n-parts";

import normalizeLine from "./normalizeLine.js";

const parseMatches = ({
    matches, fileType = "",
    parseRegex,
    showLog
}) => {

    switch (fileType) {
        case "routesJs":

            return matches.map(match => {

                normalizeLine(match.line);

                const result = extractVariable({
                    matchLine: match.line,
                    parseRegex, nParts: 2,
                    showLog
                });

                if (!result) return null;

                return {
                    variable: result.part1,
                    folderName: result.part2,
                    raka: result.part2,
                    poka: result.part1,
                    line: match.line,
                    lineNumber: match.lineNumber
                };

            }).filter(Boolean);


            break;

        default:


            return matches.map(match => {

                normalizeLine(match.line);

                const result = extractVariable({
                    matchLine: match.line,
                    parseRegex,
                    showLog
                });

                if (!result) return null;

                return {
                    variable: result.variable,
                    folderName: result.folderName,
                    raka: result.raka,
                    poka: result.poka,
                    line: match.line,
                    lineNumber: match.lineNumber
                };

            }).filter(Boolean);


            break;
    }
};

export default parseMatches;