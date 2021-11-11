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

console.log(fibonacci(50))