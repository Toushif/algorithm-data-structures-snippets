// encode ("aaaabccaadeeee")
// [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]


function encode(str) {
    let arr = []
    let k = 0
    for(let a = 0; a < str.length; a+=k) {
        let counter = 0
        for(let b = a; b < str.length; b++) {
            counter++
            if(str[a] !== str[b+1] || (b+1 === str.length-1 && str[a] === str[b+1])) {
                if(b+1 === str.length-1 && str[a] === str[b+1]) counter +=1
                k = counter
                arr.push([counter, str[a]])
                break;
            }
        }
    }

    return arr
}

console.log(encode("aaaabccaadeeee")) // [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]