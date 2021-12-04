// What will be the output of the following -

console.log(1 + "2" + "2"); // '122'
console.log(1 + +"2" + "2"); // '32'
console.log(1 + -"1" + "2"); // '02'
console.log(+"1" + "1" + "2"); // '112'
console.log("A" - "B" + "2"); // 'NaN2'
console.log("A" - "B" + 2); // NaN

console.log("0 || 1 = " + (0 || 1)); // 0 || 1 = 1
console.log("1 || 2 = " + (1 || 2)); // 1 || 2 = 1
console.log("0 && 1 = " + (0 && 1)); // 0 && 1 = 0
console.log("1 && 2 = " + (1 && 2)); // 1 && 2 = 2


var a = {},
    b = { key: "b" },
    c = { key: "c" };
a[b] = 123;
a[c] = 456;

console.log(a[b]) // 456
// The output of this code will be 456 (not 123).
// The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].
