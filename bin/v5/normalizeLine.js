const normalizeLine = (line) => {
    return line.replace(/[\r\n]/g, "");
};

export default normalizeLine;