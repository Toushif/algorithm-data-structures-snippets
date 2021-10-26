// Given a string s we need to tell minimum characters to be appended (insertion at end) to make a string palindrome.
// Input : s = "abede"
// Output : 2
// We can make string palindrome as "abedeba"
// by adding ba at the end of the string.

// Input : s = "aabb"
// Output : 2
// We can make string palindrome as"aabbaa"
// by adding aa at the end of the string.

// The solution can be achieved by removing characters from the beginning of the string one by one and checking if
// the string is palindrome or not.
// For Example, consider the above string, s = “abede”.
// We check if the string is palindrome or not.
// The result is false, then we remove the character from the beginning of string and now string becomes “bede”.
// We check if the string is palindrome or not. The result is again false, then we remove the character from the
// beginning of string and now string becomes “ede”.
// We check if the string is palindrome or not. The result is true, so the output becomes 2 which is the number of
// characters removed from the string.

// My solution
function isPalindrome(str) {
    let len = str.length;
    if (len === 1) return true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[len - 1 - i] && i < len - 1 - i) {
            return false;
        }
    }
    return true;
}

function palindromeMinAppend(str) {
    if (isPalindrome(str)) return 0;

    for (let i = 0; i < str.length; i++) {
        if (isPalindrome(str.slice(i + 1))) {
            return i + 1;
        }
    }
}

// Using recursion
function palindromeMinAppend(str) {
    if (isPalindrome(str)) return 0;

    str=str.substring(1);
  
    return 1 + palindromeMinAppend(str);
}

console.log(palindromeMinAppend("abede")); // 2
