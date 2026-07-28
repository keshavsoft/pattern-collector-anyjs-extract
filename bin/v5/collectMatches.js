import getAllMatches from "pattern-collector-anyjs-matches";

const collectMatches = ({
    fileContent,
    searchRegex,
    showLog
}) => {

    return getAllMatches({
        fileContent,
        searchRegex,
        showLog
    });
};

export default collectMatches;