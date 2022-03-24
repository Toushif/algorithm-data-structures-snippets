// Write an algorithm to find the Greatest common divisor of two numbers

// Brute force method
function gcd(num1, num2) {
    const min = Math.min(num1, num2),
        max = num1 === min ? num2 : num1;
    if (max % min === 0) return min;
    let i = 2,
        res = 1;
    while (i <= min / 2) {
        if (num1 % i === 0 && num2 % i === 0) {
            res = i;
        }
        i++;
    }
    return res;
}

// another way
function gcd(number1, number2) {
    while (number1 != number2) {
        if (number1 > number2) {
            number1 -= number2;
        } else {
            number2 -= number1;
        }
    }
    return number1;
}

// fastest way - Euclidean Algorithm
var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

// Above solution in 1 line
var gcd = function (a, b) {
    return !b ? a : gcd(b, a % b);
};

// Multiple arguments -
var gcd = (...n) =>
    n.length === 2
        ? n[1]
            ? gcd(n[1], n[0] % n[1])
            : n[0]
        : n.reduce((a, c) => (a = gcd(a, c)));


console.log(gcd(60, 40));
console.log(gcd(300, 100));
console.log(gcd(197, 71));