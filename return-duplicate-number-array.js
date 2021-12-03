// Write an algorithm that will return the first number it finds as duplicate. The array ay contain millions of numbers.
// Best implementation is using the third method below.

// implementation using array in-built sort method-
function findDuplicate(arr) {
    let store = null;
    arr.sort((a,b) => { 
        if(a < b) return -1;
        else if(a > b) return 1;
        else {
            store = a;
            return 0;
        }
    })
    return store;
}


// Implementation using merge sort - where the function will return the number immediately after finding the duplicate.
function findDuplicate(arr) {
    function merge(left, right) {
        if(typeof left === 'number') return left;
        if(typeof right === 'number') return right;
        let helperArr = [], leftCount = 0, rightCount = 0, store = null;
        while(leftCount < left.length && rightCount < right.length) {
            if(left[leftCount] < right[rightCount]) {
                helperArr.push(left[leftCount]);
                leftCount++; 
                continue;
            }
            else if(left[leftCount] > right[rightCount]) {
                helperArr.push(right[rightCount]);
                rightCount++;
                continue;
            }
            else {
                store = left[leftCount];
                break;
            }
        }
        
        if(store !== null) return store;

        while(leftCount < left.length) {
            helperArr.push(left[leftCount])
            leftCount++
        }

        while(rightCount < right.length) {
            helperArr.push(right[rightCount])
            rightCount++
        }

        return helperArr;
    }

    if(arr.length <= 1) return arr;
    const center = Math.floor(arr.length/2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(findDuplicate(left), findDuplicate(right))
}

// Best way - using frequency coubter method - O(n)
function findDuplicate(arr) {
    const obj = {}
    let duplicate = null;
    for(let i of arr) {
        if(obj[i]) {
            duplicate = i;
            break;
        } else obj[i] = 1;
    }
    return duplicate;
}

const arr = [4, 3, 5, 43, 232, 37, 222, 32, 35, 34, 23, 2, 453, 546, 3, 75, 67, 4342]
console.log(findDuplicate(arr))