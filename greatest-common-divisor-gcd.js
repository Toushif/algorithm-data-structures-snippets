// Write an algorithm to find the Greatest common divisor of two numbers

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

console.log(gcd(60, 40))
console.log(gcd(300, 100))
console.log(gcd(197, 71))
