// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ...

// Print the above fibonacci series -

// My solution -
function fibonacci(n = 1) {
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

console.log(fibonacci(12)); // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144