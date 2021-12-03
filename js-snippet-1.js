// what will be the output of the following -

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Answer -
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s

// Above code arr1 and arr2 reference the SAME ARRAY! Even after reverse operation it is the same array being reversed and assigned to a new variable. 
// Then arr1 or arr2.slice(-1) returns the last element in the array, but then we are doing a string with a plu operation in the console, so the array is parsed to a string.