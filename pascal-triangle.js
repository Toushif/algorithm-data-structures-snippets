// Given numRows, generate the first numRows of Pascal's triangle.
// Pascal's triangle : To generate A[C] in row R, sum up A'[C] and A'[C-1] from previous row R - 1.

// Example:

// Given numRows = 5,

// Return

// [
//      [1],
//      [1,1],
//      [1,2,1],
//      [1,3,3,1],
//      [1,4,6,4,1]
// ]

// My solution
function pascal(A) {
    let arr = [];
    for (let i = 0; i < A; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);
            } else {
                const sum = arr[i - 1][j - 1] + arr[i - 1][j];
                temp.push(sum);
            }
        }
        arr.push(temp);
    }
    return arr;
}

console.log(pascal(5))