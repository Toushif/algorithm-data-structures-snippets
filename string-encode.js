// encode ("aaaabccaadeeee")
// [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]


function encode(str) {
    let arr = []
    let k = 0
    for(let j = 0; j < str.length; j+=k) {
        let counter = 0
        for(let i = j; i < str.length; i++) {
            counter++
            if(str[j] !== str[i+1] || (i+1 === str.length-1 && str[j] === str[i+1])) {
                if(i+1 === str.length-1 && str[j] === str[i+1]) counter +=1
                k = counter
                arr.push([counter, str[j]])
                break;
            }
        }
    }

    return arr
}

console.log(encode("aaaabccaadeeee")) // [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]