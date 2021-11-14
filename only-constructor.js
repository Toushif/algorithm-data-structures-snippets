function onlyCons(a) {
    console.log(this.constructor, onlyCons); //initially this.constructor will point to the global or immediate
    //lexical scope object. But when called using new
    //method then this constructor points to the function
    //itself, so onlyCons becomes equals to this.constructor

    if (this.constructor !== onlyCons) { //OR, this instanceof onlyCons
        throw "Cannot call as a function";
    }

    this.a = a;
}

//Here in the above function, we do not allow the function to be invoked normally.
//Such functions are constructor functions. We can only create objects using these functions.
onlyCons()