//Write an algorithm where you will pass a string of parenthesis and check if that is balanced or not.
//For example, ‘()()()()’ or ‘(((())))’ these are balanced parenthesis with legit opening and closing braces.
//‘((()’ or ‘)(’ are invalid.

function balancedParanthesis(string) {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) {
            return previous;
        }

        if (char === "(") {
            return ++previous;
        }

        if (char === ")") {
            return --previous;
        }

        return previous;
    }, 0);
}

// Balanced paranthesis - with other brackets as well - interview questions
function validParenthesis(str) {
    
    const obj = str.split('').reduce((p, v) => {
        if(v === '[' || v === '(' || v === '{') {
            if(!(v in p) || p[v] > -1) {
                p[v] = v in p ? ++p[v] : 1
            }
        }
        if(v === ']') {
            p['['] = '[' in p ? --p['['] : -1
        }
        if(v === ')') {
            p['('] = '(' in p ? --p['('] : -1
        }
        if(v === '}') {
            p['{'] = '{' in p ? --p['{'] : -1
        }
        return p;
    }, {})

    const sum = Object.values(obj).reduce((p,v) => p+v,0);
    return !sum;
}

console.log(balancedParanthesis("(())(")); //false
console.log(balancedParanthesis("(())")); //true

console.log(validParenthesis("[[]]([])[]")); //true
console.log(validParenthesis("(((}}))")); //false
console.log(validParenthesis("())(()")); //false
