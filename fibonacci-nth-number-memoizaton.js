// Write a function that'll take a number and return the nth number of the fibonacci series.

// Here wthout the store you can try and test. It takes a lot of time because it calulates each and everything everytime.
// With store we are memoizing every value once calculated and returning that if need be instantaneously.
function fibonacci(n, store = {}) {
    if(store[n]) return store[n]
    if(n <= 2) return 1
    else {
        store[n] = fibonacci(n-1, store) + fibonacci(n-2, store)
    }
    return store[n]
}

// For extremely large numbers -
function fibonacciBigInt(n) {
    const store = {};
    let i = 0, first = 0n, second = 1n;
    while(i < n) {
        const temp = first;
        first = second;
        second = first + temp;
        i++;
    }
    return first;
}

console.log(fibonacci(50))
console.log(fibonacciBigInt(9999n))
console.log(fibonacciBigInt(10n))
