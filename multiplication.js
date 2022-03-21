// Write your own Multiply algo for 2 numbers without using JS in-built multiple -

function multiply(num1, num2) {
    const result = num2.toString().split('').reverse().map(Number);
    for (let carry = 0, i = 0; i < result.length || carry; i++) {
        const prod = (result[i] || 0) * num1 + carry;
        result[i] = prod % 10;
        carry = parseInt(prod / 10, 10);
    }

    return +result.reverse().join('');
}

console.log(multiply(34534,91841));