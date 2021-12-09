// Advantages of Generators
// - Lazy Evaluation

// As seen with Infinite Data Streams example, it is possible only because of lazy evaluation. Lazy Evaluation is an evaluation model which delays the evaluation of an expression until its value is needed. That is, if we don’t need the value, it won’t exist. It is calculated as we demand it. Let’s see an example —

function* powerSeries(number, power) {
    let base = number;
    while (true) {
        yield Math.pow(base, power);
        base++;
    }
}

// The powerSeries gives the series of the number raised to a power. For example, power series of 3 raised to 2 would be 9(3²) 16(4²) 25(5²) 36(6²) 49(7²). When we do const powersOf2 = powerSeries(3, 2); we just create the generator object. None of the values has been computed. Now, if we call next(), 9 would be computed and retuned.

// - Memory Efficient

// A direct consequence of Lazy Evaluation is that generators are memory efficient. We generate only the values that are needed. With normal functions, we needed to pre-generate all the values and keep them around in case we use them later. However, with generators, we can defer the computation till we need it.

// We can create combinator functions to act on generators. Combinators are functions that combine existing iterables to create new ones. One such combinator is take. It takes first n elements of an iterable. Here’s one implementation —

function* take(n, iter) {
    let index = 0;
    for (const val of iter) {
        if (index >= n) {
            return;
        }
        index = index + 1;
        yield val;
    }
}

// Here’s some interesting use cases of take —

take(3, ["a", "b", "c", "d", "e"]); // a b c
take(5, powerSeries(3, 2)); // 9 16 25 36 49

// Infinite iterables
// Some iterable may never be done.

function naturalNumbers() {
    let n = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return { value: n++ };
        },
    };
}
// With an infinite iterable, you must not iterate over “all” of it. For example, by breaking from a for-of loop:

for (const x of naturalNumbers()) {
    if (x > 2) break;
    console.log(x);
}
// Or by only accessing the beginning of an infinite iterable:

const [a, b, c] = naturalNumbers();
// a=0; b=1; c=2;
// Or by using a combinator. take() is one possibility:

for (const x of take(3, naturalNumbers())) {
    console.log(x);
}
// Output:
// 0
// 1
// 2
take(7, naturalNumbers()); // 1 2 3 4 5 6 7

// Here’s an implementation of cycled library (without the reversing functionality).

function* cycled(iter) {
    const arrOfValues = [...iter];
    while (true) {
        for (const val of arrOfValues) {
            yield val;
        }
    }
}

console.log(...take(10, cycled(take(3, naturalNumbers())))); // 1 2 3 1 2 3 1 2 3 1

// > Learn more on iterables and iterator - https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
// https://exploringjs.com/es6/ch_iteration.html#sec_plain-objects-not-iterable

// > Learn more about generators - https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

// https://davidwalsh.name/es6-generators

// https://exploringjs.com/es6/ch_generators.html
