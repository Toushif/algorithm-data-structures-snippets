var x = (function () {
    var f = function (y) {
        console.log("y", y, this);

        return this;
    };

    var t = function (z) {
        console.log("z", z);
    };

    return {
        t,
        f,
    };
})();

x.f(20).t(30); //first logs 20 and then 30

//Here above the important aspect of function chaining is to always return the this object
//so that the next method could  be chained or called on it for it work properly.
