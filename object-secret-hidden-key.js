// If you want to create an Object in SJ and dont want its property to be accessible by normal access by value accessor method (using sqaure brackets), use Symbol data type to create unique key and use defineProperty to make it non enumerable and assig a value to the key.

// In ES6, it's possible to make properties with keys of a new primitive type -- symbol. This type is used by Javascript itself to enumerate an object using a for ... of loop.

// Symbols have a descriptive text, but they are reference types that have a unique identity. They aren't like strings, which are equal if they have the same value. For two symbols to be equal, they must be two references for exactly the same thing.

// You create a symbol using the Symbol function:

let symb = Symbol("descriptive text...");
// You can use the Object.defineProperty function to define properties with symbols as keys.
const myObject = {
    someKey: 'Heya'
}
let theSecretKey = Symbol("meaning of life");
Object.defineProperty(myObject, theSecretKey, {
    enumerable : false,
    value : 'I am some secret value',
    writable: false //even if you dont give this it will be false by default
});

// So the value of theSecretKey inside myObject can only be accessed using ->
console.log(myObject[theSecretKey]) // 'I am some secret value'

// Unless someone gets a reference to that exact symbol object, they can't look up the value of the property by key.
// You cant even access the secret key in any way using Object.keys or Object.getOwnPropertyNames
// But you can also use the regular syntax:

let theSecretKey = Symbol("meaning of life");
myObject[theSecretKey] = 42;
// Properties with this key type will never show up in for ... in loops or the like, but can still be enumerable and non-enumerable, as functions like Object.assign work differently for non-enumerable properties.

// Object.getOwnPropertyNames won't get you the symbol keys of the object, but the similarly named Object.getOwnPropertySymbols will do the trick.