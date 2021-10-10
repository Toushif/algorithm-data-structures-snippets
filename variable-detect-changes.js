//Detect changes if a variable is changed -

function changeCB(num) {
    console.log("Numner changed:", num);
}

detChange = (function (context) {
    return function (name, value, cb) {
        var origValue = value;

        Object.defineProperty(context, name, {
            get: function () {
                return origValue;
            },

            set: function (v) {
                origValue = v;

                cb.call(null, origValue);
            },
        });
    };
})(window);

detChange("var1", 50, changeCB);

var1 = 400; // Numner changed: 400
var1 = 402; // Numner changed: 402
