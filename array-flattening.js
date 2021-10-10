function rec(x, b = []) {
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "object") {
            rec(x[i], b);
        } else {
            b.push(x[i]);
        }
    }
    return b;
}

aa = [1, 2, 3, [4, 5, 6, [7, 8, 9, [1, 2, 3]]]];
console.log(rec(aa));

console.log(aa.flat(3)); //ES10 flat method, here if you dont pass an argument then by default flat method will
                        //flatten the array only 1 level deep.
