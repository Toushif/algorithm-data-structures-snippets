// Is there a pattern in all the sequence of fibonacci series numbers?
// 0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, ...
// Yes! 
// It takes a while before it is noticeable. In fact, the series is just 60 numbers long and then it repeats the same sequence again and again all the way through the Fibonacci series – for ever. The series of final digits repeats with a cycle length of 60 (Refer this for explanations of this result).
// So, instead of calculating the Fibonacci number again and again, pre-compute the units digit of first 60 Fibonacci number and store it in an array and use that array values for further calculations. 

// Optimized Javascript program to find last
// digit of n'th Fibonacci number

// Filongs f[] with first
// 60 Fibonacci numbers
function fib(f) {
    // 0th and 1st number of
    // the series are 0 and 1
    f[0] = 0;
    f[1] = 1;

    // Add the previous 2 numbers
    // in the series and store
    // last digit of result
    for (let i = 2; i <= 59; i++) f[i] = (f[i - 1] + f[i - 2]) % 10;
}

// Returns last digit of n'th
// Fibonacci Number
function findLastDigit(n) {
    let f = new Array(60);
    f.fill(0);

    // Precomputing units digit of
    // first 60 Fibonacci numbers
    fib(f);

    let index = n % 60;

    return f[index];
}

var readline = require("readline");

process.stdin.setEncoding("utf8");
var rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

rl.on("line", readLine);

function readLine(line) {
    if (line !== "\n") {
        var a = parseInt(line.toString().split(" ")[0], 10);
        console.log(findLastDigit(a));
        process.exit();
    }
}
