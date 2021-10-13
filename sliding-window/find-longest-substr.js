// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n^2)

function findLongestSubstringN2(str) {
    let obj = {};
    let i = 0;
    let maxLen = 0;
    let tempLen = 0;
    while (i < str.length) {
        if (typeof obj[str[i]] !== "undefined") {
            tempLen = 0;
            i = obj[str[i]] + 1;
            obj = {};
        } else {
            obj[str[i]] = i;
            tempLen++;
            i++;
        }
        maxLen = Math.max(maxLen, tempLen);
    }

    return maxLen;
}

console.log(findLongestSubstringN2("")); // 0
console.log(findLongestSubstringN2("rithmschool")); // 7
console.log(findLongestSubstringN2("thisisawesome")); // 6

// Time Complexity - O(n)

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
