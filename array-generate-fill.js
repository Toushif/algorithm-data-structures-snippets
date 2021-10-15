// This will create an array of length 1000 filled with random numbers between 0 and 100
// Here we do toFixed twice coz after first toFixed some values still have decimals.
// Try this and check - > Array(1000).fill().map(v => Math.random().toFixed(2)*100)  
Array(1000).fill().map(v => +(Math.random().toFixed(2)*100).toFixed(0))

// Fill if not passed an argument will fill the array with undefined
Array(10).fill()

// Fill if passed a value will fill all the index with the same value
Array(2).fill('Hi') // ['Hi', 'Hi']

// This will create an array same as above with length and 100 and fill all indexes with random numbers
Array.apply(null, {length: 100}).map(Function.call, Math.random)

// Works fine without Function.call
Array.apply(null, {length: 100}).map(Math.random)

// Same as above
Array(10).fill().map(Function.call, Math.random)
