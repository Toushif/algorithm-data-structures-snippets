// check techsith tutorials for more details- https://www.youtube.com/watch?v=r7Gg8Mbrn7I

function abc() {
    return new Promise(res => {
        setTimeout(_=> res('Toushif'), 3000)
    })
}

function bcd(promise) {
    let status = 'pending', result;
    let sus = promise.then(res => {
        status = 'success'
        result = res;
    })
    return {
        read() {
            if(status === 'pending') return sus;
            else return result;
        }
    }
}

function fetchData() {
    let name = abc()
    return {
        name: bcd(name)
    }
}

aa= fetchData()
aa.name.read()