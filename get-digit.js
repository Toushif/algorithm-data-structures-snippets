// Write a function which will return a digit from an integer for its corresponding index when passed.

// Brute force or most intuitive way
function getDigit(num, ind) {
    let str = num.toString()
    if(ind < str.length) {
        return +str[str.length - ind -1]
    }
    return null
}

// Another solution where we can get the digit by using the decimal system - coz the integer value we pass
//  is a decimal (it can be binary, hex or with any base and the solution will still work)
// Below we are doing Math.pow(10, ind) coz we know we passing decimal number with base 10.
function getDigit(num, ind) {
    return Math.floor((Math.abs(num) / Math.pow(10, ind)) % 10)
}

// Digit count
function getDigitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}


console.log(getDigit(4535434, 1)) //3
console.log(getDigit(4535434, 6)) //4
console.log(getDigitCount(453543479)) //9