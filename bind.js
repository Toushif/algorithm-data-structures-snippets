Function.prototype.binds = function (obj) {
    let func = this;
    let additionalArgs = [].slice.call(arguments, 1);
    let args = arguments;

    return function () {
        let currentArgs = [].slice.call(arguments);
        let combinedArgs = [].concat.call(additionalArgs, currentArgs);

        console.log(
            "combinedArgs",
            combinedArgs,
            additionalArgs,
            currentArgs,
            args,
            arguments
        );

        return func.apply(obj, combinedArgs);
    };
};

store = {
    aa: function (a) {
        return a + " " + this.bb;
    },
    bb: "Toushif",
};
store2 = { bb: "Boris" };

cc = store.aa;

console.log(cc.binds(store2, "Hey")()); //”Hey Boris”
console.log(cc.binds(store2)("Hey")); //”Hey Boris”


