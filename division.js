// Write your own Division algo for 2 numbers without using JS in-built division -
// The third argument is the precision of decimals you want

function divide(n, k, p) {
    let value = 0;
    while (n > 0) {
      n -= k;
      value++;
    }
    if (n < 0) {
      value--;
        if(p) {
            let r = divide((k+n)*10, k, --p)
            if(r.toString().includes('.')) {
                 r = r.toString().replace(/[.]/, '')   
            }
            value = `${value}.${r}`;
        }
    }
    return +value;
}

console.log(divide(104,3,5));