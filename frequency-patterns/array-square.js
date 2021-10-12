//Write an algorithm which will have a function same which will take 2 arrays as input.
// The values in one array must be the square in the correspondong array. The order doesn't matter.
// But frequency matters - that is, each element must have its square present uniquely.

//This is naive brute force method where we have time complexity of O(n^2)
function same(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let v of arr1) {
            if (!arr2.includes(v * v)) {
                return false;
            } else {
                arr2.splice(arr2.indexOf(v), 1);
            }
        }
        return true;
    }
    return false;
}

//Another solution with FREQUENCY COUNTER pattern
// This is a much much faster solution as it has a time complexity of O(n) 'coz we have 2 separate for loops
// which is always better then nested loops
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        //key in object is always string, (+key) is not necessary as JS will anyway parse it to number when doing **2.
        if (!((+key) ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
console.log(same([1, 2, 4], [16, 1, 4])); //true
console.log(same([1, 2, 4], [16, 1, 3])); //false
console.log(same([1, 2, 3], [1, 9])); //false
