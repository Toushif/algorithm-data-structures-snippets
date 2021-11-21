Array.prototype.reduceToushif = function(Fn, param) {
    let res = param;
    for(let i = 0; i < this.length; i++) {
        res = Fn.call(this, res, this[i], i, this)
    }
    return res;
}

const arr=[1,2,3,4,5,6,7,8,9];
const res = arr.reduceToushif((p,v)=> p+v,0) //45

console.log(res)