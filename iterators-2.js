// Function Generators.

function* colors() {
    yield "red";
    const aa = yield "blue";
    return aa;
}

const col = colors(); // here when you do colors() it doesn't invoke the function generator. Col is {}

console.log(col.next()); // this is how you call a function generator -  by using next(). Here the output is
// {value: 'red', done: false} // Done will be false as long as there is yield statement
console.log(col.next()); // output: {value: 'blue', done: false}, so here it calls the next yield statement and 		returns the object with value as blue

console.log(col.next("green")); // here the output will be {value: 'green', done: true}, so here when third time 	it is called next then it will execute the return statement. The value is green because after 2nd yield is executed then the cursor is still on the 2nd line. So, when we do col.next the third time with a parameter then the 2nd yield becomes green and assigns the value to const aa. And since 2 yield statements has already been executed by 2 next commands, the third one goes beyond the 2nd yield and executes the return 'aa' statement. Since aa is now green so we get value as green. And also, now we get done as true, because all the yields statements' have been executed, so we get done as true.
// Generators are basically functions where you can revisit multiple times and start from the point where you last left. And in terms of practical usability function generators are used in 'for of' loops where it can iterate through any iterables. Example -

function* colors() {
    yield "red";
    yield "blue";
    yield "green";
}

const myColors = [];

for (let color of colors) {
    myColors.push(color);
}

myColors; // ['red', 'blue', 'green']
