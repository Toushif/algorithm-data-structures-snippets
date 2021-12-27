function factorial(num) {
  if (num < 2) return 1;

  const result = num.toString().split('').reverse().map(Number);

  while (--num) {
    for (let carry = 0, i = 0; i < result.length || carry; i++) {
      const prod = (result[i] || 0) * num + carry;
      result[i] = prod % 10;
      carry = parseInt(prod / 10, 10);
    }
  }

  return result.reverse().join(''); // return as string coz the result is way too large to be represented in number
  // return +result.reverse().join(''); // return number if num is not large else the result would come as Infinity. 
}

console.log(factorial(1000));
console.log(factorial(10));
