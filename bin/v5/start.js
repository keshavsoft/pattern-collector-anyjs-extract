import packageJson from "../../package.json" with { type: "json" };

import collectMatches from "./collectMatches.js";
import parseMatches from "./parseMatches.js";
import logger from "./logger.js";

const startFunc = ({
    fileContent,
    parseRegex,
    searchRegex,
    fileType,
    showLog,
    showLogStep1
}) => {

    logger.start({ packageJson, showLog });

    const matches = collectMatches({
        fileContent,
        searchRegex,
        showLog: showLogStep1
    });

    logger.inputs({ packageJson, showLog, matches });

    const allMatches = parseMatches({
        matches,
        parseRegex, fileType,
        showLog: showLogStep1
    });

    logger.outputs({ packageJson, showLog, allMatches });

    return allMatches;
};

export default startFunc;