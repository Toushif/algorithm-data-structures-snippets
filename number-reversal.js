// Reverse a number without using any inbuilt JS method

function reverseNum(num) {
    let str = num.toString();
    if (!str) return "";
    let temp = reverseNum(str.substr(1)) + str[0];
    return parseInt(temp, 10);
}

console.log(reverseNum(123456))