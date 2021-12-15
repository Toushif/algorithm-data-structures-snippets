
function fibonacci(n, store = {}) {
    if(store[n]) return store[n]
    if(n === 0) return 0;
    if(n <= 2) return 1;
    else {
        store[n] = fibonacci(n-1, store) + fibonacci(n-2, store)
    }
    return store[n]
}

var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var n = parseInt(line.toString().split(' ')[0], 10);
    console.log(fibonacci(n));
    process.exit();
  }
}