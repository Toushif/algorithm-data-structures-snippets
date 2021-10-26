//fastest
function reverse(s) {
    return s.split("").reverse().join("");
}

//for supporting UTF-16
function reverse(s) {
    return [...s].reverse().join("");
}

//recursion
function reverse(s) {
    return s === "" ? "" : reverse(s.substr(1)) + s.charAt(0);
}

//usig reduce
function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

// Using recursion
function reverse(str) {
    if (str.length === 1) return str;
    return reverse(str.slice(1)) + str[0];
}
