// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)
// Both solutions using Frequency Counters

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let objStr1 = {};
    let objStr2 = {};
    for (let v of str1.toLowerCase()) {
        objStr1[v] = ++objStr1[v] || 1;
    }
    for (let v of str2.toLowerCase()) {
        objStr2[v] = ++objStr2[v] || 1;
    }
    for (let v in objStr1) {
        if (!(v in objStr2)) {
            return false;
        }
        if (objStr1[v] !== objStr2[v]) {
            return false;
        }
    }
    return true;
}


//More optimized solution
function validAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    const obj = {};

    for (const char of word1.toLowerCase()) {
        obj[char] = ++obj[char] || 1;
    }

    for (const char of word2.toLowerCase()) {
        if (obj[char]) obj[char]--;
        else return false;
    }

    return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("Toushif", "fishout")); //true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
