// Write an algorithm that takes an array of string and returns a new array containing only alphanumeric elements.
function alphaNumeric(arr) {
    let store = [],
        regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
    arr.forEach(v => {
        if(regex.test(v)) {
            store.push(v);
        }
    })
    return store
}

console.log(alphaNumeric(["190ab","ui", "90AJ", "PN", "UI19"])) // [ '190ab', '90AJ', 'UI19' ]

