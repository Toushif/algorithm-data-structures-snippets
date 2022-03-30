// replace
'Toushif099080543.hgu34tc34t.34543t'.replace(/[a-z]/g, '') // 'T099080543.3434.34543'


let regex1 = /^[a-zA-Z0-9]+$/g //tests for alphanumeric characters
let regex2 = /^[a-zA-Z]+$/g //test for apphabets only
let regex3 = /^\d+$/g //tests for digits only
let regex4 = /\w/g // The \w metacharacter matches word characters. A word character is a character a-z, A-Z, 0-9, including _ (underscore).


console.log(regex3.test('8643768375')) // true
console.log(regex3.test('8643768375m')) // false
// console.log(regex4.test('vvj*hjjh&%&^(^(*')) // true


// match method
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi)); // ['ain','AIN','ain','ain'] global case insensitive regex
// The match() method searches a string for a match against a regular expression
// The match() method returns the matches in an array.
// The match() method returns null if no match is found.
