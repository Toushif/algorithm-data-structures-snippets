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

console.log(balancedParanthesis("(())(")); //false
console.log(balancedParanthesis("(())")); //true
