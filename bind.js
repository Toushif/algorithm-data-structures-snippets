Function.prototype.bind = function (obj) {
    var func = this;

    var additionalArgs = [].slice.call(arguments, 1);

    var args = arguments;

    return function () {
        var currentArgs = [].slice.call(arguments);

        var combinedArgs = [].concat.call(additionalArgs, currentArgs);

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

cc.bind(store2, "Hey")(); //”Hey Boris”
