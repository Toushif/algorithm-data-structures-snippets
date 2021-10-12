//write algo to count the number of alphanumeric characters in a string. Ignore special characters and treat uppercase as lowercase

function charCount(str) {
    let a={};
    let s= str.toLowerCase().replace(/[^0-9a-z]/gi, '')
    for(let i =0; i < s.length; i++) {
        a[s[i]] = a[s[i]] ? ++a[s[i]] : 1 //Or, a[s[i]] = ++a[s[i]] || 1
    }
    return a 
}

let count = charCount('Toushif is great 9797 hj&^*^ kh&G*b 87h8h');
console.log(count)