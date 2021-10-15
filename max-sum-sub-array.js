// Given an array consisting of n integers, find the contiguous subarray of given length k 
// that has the maximum average value. And you need to output the maximum average value.
// Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12–5–6+50)/4 = 51/4 = 12.75

// My solution uing Multiple counter method
// Time complexity - O(n)
// Space complexity - O(n)
function maxArrAvg(arr, k) {
    function calcMax(subArr) {
        const total = subArr.reduce((pre, val) => {
            return pre + val;
        }, 0);
        return total / subArr.length;
    }

    let store = [];
    for (let i = 0; i < k; i++) {
        store.push(arr[i]);
    }
    let max = calcMax(store);
    for (let i = k; i < arr.length; i++) {
        //let ori = calcMax(store.slice(i-k));
        store.push(arr[i]);
        let next = calcMax(store.slice(i - k + 1));
        if (max < next) {
            max = next;
        }
    }
    return max;
}


console.log(maxArrAvg([1,12,-5,-6,50,3], 4)) //12.75
console.log(maxArrAvg([-2, -1, -3, -4, -1, -2, -1, -5, -4], 4)) //0