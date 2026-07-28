const start = ({ packageJson, showLog }) => {
    if (showLog?.keysOnly) {
        console.log(`${packageJson.name}-start`);
    };
};

const inputs = ({ packageJson, showLog, matches }) => {
    if (showLog?.withValues) {
        console.log(`${packageJson.name}-inputs : `, matches);
    };
};

const outputs = ({ packageJson, showLog, allMatches }) => {
    if (showLog?.keysOnly) {
        console.log(`${packageJson.name}-end`);
    };

    if (showLog?.withValues) {
        console.log(`${packageJson.name}-outputs : `, allMatches);
    };
};

export default {
    start,
    inputs,
    outputs
};