// Write an algorithm that will return true if all the digits of the number are present within the string.
// '1298450376ABC' -> this should return true coz it has all the digits.

function countDigits(str) {
    if (str.length < 10) return false;

    let arr = [];
    for (let v of str) {
        if (v.charCodeAt() > 47 && v.charCodeAt() < 58 && !arr.includes(v)) {
            arr.push(v);
        }
    }
    return arr.length === 10;
}

console.log(countDigits("1298450376ABC")); // true

