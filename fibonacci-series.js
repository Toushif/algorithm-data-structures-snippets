// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ...

// Print the above fibonacci series -

// My solution -
function fibonacci(n) {
    let store = [];
    for (let i = 1; i <= n; i++) {
        if (i <= 2) {
            store.push(1);
        } else {
            store.push(store[i - 3] + store[i - 2]);
        }
    }
    return store.join(", ");
}


// Another solution
// function fibonacci(n) {
//     let n1 = 0, n2 = 1, nextTerm;
//     console.log("Fibonacci Series:");

//     for (let i = 1; i <= n; i++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// }

console.log(fibonacci(20));