// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
    if (!str.length) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// Conventional method
function isPalindrom(s) {
    let c = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i] && i < s.length - 1 - i) {
            c = false;
        }
    }
    return c;
}

// Another way-
function isPalindrome2(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return str === [...str].reverse().join('');
}

console.log(isPalindrome2("amanaplanacanalpanama")); // true
console.log(isPalindrome2("A car, a man, a maraca"));  // true