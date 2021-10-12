//write algo to count the number of alphanumeric characters in a string. Ignore special characters and treat uppercase as lowercase

function charCount(str) {
    let a={};
    let s= str.toLowerCase().replace(/[^0-9a-z]/gi, '')
    for(let i =0; i < s.length; i++) {
        a[s[i]] = a[s[i]] ? ++a[s[i]] : 1 //Or, a[s[i]] = ++a[s[i]] || 1
    }
    return a 
}


//another solution
function charCount(str) {
    let a={};
    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            a[char] = ++a[char] || 1;
        }
    }
    return a 
}

//another solution using charCodeAT which is the FASTEST!!
function charCount(str) {
    let a={};
    for(let char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            a[char] = ++a[char] || 1;
        }
    }
    return a 
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
        return true;
    }
    return false;
}

let count = charCount('JavaScript is great hahah 9797 hj&^*^ kh&G*b 87h8h');
console.log(count)