const compareDateFunc = (a, b) => {
    a = a[0].split("-").join("");
    b = b[0].split("-").join("");
    return a - b;
};

export default compareDateFunc;
