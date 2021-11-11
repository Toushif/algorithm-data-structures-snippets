//Write an algorithm which will have a function called sumZero, which accepts a SORTED array of integers.
// The function should find the first pair where the sum is zero. Return an array with both the values
// if the sum is zero or return undefined if not found.

// My solution -> time complexity O(n)
function sumZero(arr) {
    let obj = {}
    for(let v of arr) {
        if(!obj[v]) {
            if(obj[-v]) {
                return [v, -v]
            }
            obj[v] = 1;
        }
    }
    return undefined
}

//Multiple pointer method - 
// time complexity O(n)
// space complexity - O(1)
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if(sum > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(sumZero([-3,-2,-1,0,2,6,7,90])) // [-2,2]