// https://stackoverflow.com/questions/2636453/is-it-possible-to-create-a-hidden-property-in-javascript
// If you want to create an Object in JS and dont want its property to be accessible by normal access by value accessor method (using sqaure brackets), use Symbol data type to create unique key and use defineProperty to make it non enumerable and assign a value to the key.

// In ES6, it's possible to make properties with keys of a new primitive type -- symbol. This type is used by Javascript itself to enumerate an object using a for ... of loop.

// Symbols have a descriptive text, but they are reference types that have a unique identity. They aren't like strings, which are equal if they have the same value. For two symbols to be equal, they must be two references for exactly the same thing.

// You create a symbol using the Symbol function:
let symb = Symbol("descriptive text...");
// You can use the Object.defineProperty function to define properties with symbols as keys.

// Example -
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


// ******************************************************
// Another way using WeakMaps
// Weak maps
// The strongest way to hide a property on an object is not to store it on the object at all. Before ES6, this was kind of tricky to do, but now we have weak maps.

// A weak map is basically a Map, i.e. a key-value store, that doesn't keep (strong) references to the keys so they can be garbage collected. A weak map is very limited, and doesn't allow you to enumerate its keys (this is by design). However, if you get a reference to one of the map's keys, you can get the value that goes with it.

// They are primarily designed to allow extending objects without actually modifying them.

// The basic idea is to create a weak map:

let weakMap = new WeakMap();
// And use objects you want to extend as keys. Then the values would be sets of properties, either in the form of {} objects, or in the form of Map data structures.

weakMap.set(myObject, {
    "meaning of life" : 42
});
// The advantage of this approach is that someone needs to get a reference to your weakMap instance and the key in order to get the values out, or even know they exist There's no way around that. So it's 100%, guaranteed to be secure. Hiding properties in this way ensures no user will ever discover them and your web application will never be hacked*

// The biggest flaw in all this, of course, is that this doesn't create an actual property. So it doesn't participate in the prototype chain and the like.

// (*) This is a lie.

// **********************************************
// Another way is using Private class fields -

// A fairly recent addition to ECMAScript is the private class field. This feature is currently in Stage 3 and is not in the final standard yet. However, it's supported in all modern browsers and more recent versions of Node.

// Private class fields are a specific variant on class field declarations. You can only use them when defining a JavaScript class. They cannot be defined anywhere else. The syntax is as follows:

class Example {
    #thisIsPrivate;
    constructor(v) {
        this.#thisIsPrivate = v;
    }
}
// This field is truly private. It can only be accessed by code inside the syntactic definition of Example and nowhere else. There is no reflection API or other feature that lets you access the field. It will never appear as the result of functions such as Object.getOwnPropertyNames. The name of the field always starts with #.