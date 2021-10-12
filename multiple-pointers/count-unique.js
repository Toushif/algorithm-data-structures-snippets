// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

// My solution ->
function countUniqueValues(arr) {
    //One liner using Set
    // return [...new Set([...arr])].length //OR, new Set(arr).size
    
    let obj = {};
    for(let v of arr) {
        if(!obj[v]) {
            obj[v] = 1;
        }
    }
    return Object.keys(obj).length
}

// Solution with two pointers (two variables)
function countUniqueValues(arr) {
    if (!arr.length) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }

    return i+1;
}

// Solution with one pointer (one variable)
function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let counter = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) counter++;
    }

    return counter;
}

console.log(
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([])); // 0
