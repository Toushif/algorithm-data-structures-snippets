// Object assign method
Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}

// Spread operator method
obj={ ...['a', 'b', 'c'] }
obj={ ...[1,2,3,4,5,6] }

// Array reduce method
['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 
// { a: "a", b: "b", c: "c" }

// another way
arr=[1,2,4,5,6,7,8,9]
arr=['a', 'b', 'c']
obj = Object.fromEntries(Object.entries([arr]))