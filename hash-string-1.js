// Tracxn Interview questions
// Write an algorithm where a function hash will take a string containing *,+ and - characters only (3 characters, no comma).
// and 2nd parameter as number N which will split the string into substrings of length N, original string will a multiple of N.
// after splitting the string sort the substrings by weight (the number of coccurence of each unique substrings).
// If more than one substring is same then sort by * > - > +
// In the end join the unique sub strings and return the result.

// Example - input string: -+*++-*++-
// N = 2
// Output: *++--+
// Explanation-
// After splitting the string- -+, *+, +-, *+, +-
// Weight-
// -+ is 1
// *+ is 2
// +- is 2
// So between *+ and +- if we sort then * comes before + as per conditions, so, *+ will come before +-
// Therefore after sorting -> *+, +-, -+
// Result: *++--+

function sortByWeight(obj) {
    const arr = Object.entries(obj);
    const store = {};
    for (let i = 0; i < arr.length; i++) {
        if (store[arr[i][1]]) {
            store[arr[i][1]].push(arr[i][0]);
        } else {
            store[arr[i][1]] = [];
            store[arr[i][1]].push(arr[i][0]);
        }
    }
    return store;
}

function sortDesc(arr) {
    let ordering = {},
        sortOrder = ["*", "-", "+"];
    for (var i = 0; i < sortOrder.length; i++) ordering[sortOrder[i]] = i;

    arr.sort(function (a, b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return (
                    ordering[a[i]] - ordering[b[i]] || a[i].localeCompare(b[i])
                );
            }
        }
    });

    return arr;
}

function sortByChar(obj) {
    let store = [];
    let allKeys = Object.keys(obj);
    allKeys.sort((a, b) => b - a);
    for (let i = 0; i < allKeys.length; i++) {
        const temp = obj[allKeys[i]];
        const sorted = sortDesc(temp);
        store = [...store, ...sorted];
    }
    //     console.log('keys', allKeys, store, obj)
    return store;
}

function hash(inputStr, subStrLength) {
    const storeArr = [];
    const obj = {};
    for (let i = 0; i < inputStr.length; i += subStrLength) {
        const ele = inputStr
            .split("")
            .slice(i, i + subStrLength)
            .join("");
        storeArr.push(ele);
    }

    for (let v of storeArr) {
        if (obj[v]) obj[v]++;
        else obj[v] = 1;
    }

    const sortedWeight = sortByWeight(obj);
    const sortedByCharacter = sortByChar(sortedWeight);
    return sortedByCharacter.join("");
    //     console.log('store', storeArr, obj, sortedWeight)
}

console.log(hash('-+*++-*++-', 2)); // *++--+
console.log(hash('*+-*--', 3)); // *--*+-