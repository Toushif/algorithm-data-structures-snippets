// Divide and Conquer - find index
// Write a function called search which accepts a sorted array of
// numbers. The function should return the index of the integer in the array.
// If the value is not found, return -1.

// My solution - LINEAR SEARCH
// time complexity - O(n)
function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element === num) {
            return i;
        }
    }
    return -1
}

// Using Divide and conquer method - BINARY SEARCH
// time complexity - O(log n) - super fast
function search(arr, num) {
    let min = 0,
        max = arr.length - 1;
    while(min <= max) {
        let mid = Math.floor((min + max) / 2)
        if(arr[mid] < num) {
            min = mid + 1
        } else if(arr[mid] > num) {
            max = mid - 1
        } else {
            return mid;
        }
    }
    return -1
}

const log = console.log
log(search([1, 2, 3, 4], 4)); // 3
log(search([1, 2, 3, 4, 4, 6, 7, 8, 9], 8)); // 7
log(search([1, 2, 3, 4, 6, 7, 8, 9], 3)); // 2
log(search([10, 22, 37, 44, 66, 102], 14)); // -1
log(search([1, 2, 3, 4, 6, 7, 8, 9], 12)); // -1
log(search([3, 5, 7, 9, 11, 12, 13, 14, 15, 16], 16)); // 9
log(search([11], 11)); // 0
log(search([], 11)); // -1
log(search([4, 4, 4, 4, 4], 5)); // -1