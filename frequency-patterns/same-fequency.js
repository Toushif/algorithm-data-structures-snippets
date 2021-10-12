// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

// My solution
function sameFrequency(num1, num2){
    if(num1.toString().length !== num2.toString().length) return false
    let obj = {}
  for(let v of num1.toString()) {
      obj[v] = ++obj[v] || 1
  }
  for(let v of num2.toString()) {
      if(!(v in obj) || obj[v] < -1) {
          return false
      } else {
          obj[v]-=1
      }
  }
  return true
}

function sameFrequency(num1, num2) {
    const str1 = `${num1}`;
    const str2 = `${num2}`;

    if (str1.length !== str2.length) return false;

    const obj = {};

    for (const char of str1) {
        obj[char] = ++obj[char] || 1;
    }

    for (const char of str2) {
        if (!obj[char]) return false;
        obj[char]--;
    }

    return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
