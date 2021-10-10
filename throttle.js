throttle = (func, delay) => {
    let throttleTimer; //Unlike debounce which happens once the event stops firing within the delay time,
    //throttle will fire regularly at a certain delay interval no matter how many times clicked.
    //So, if delay is 3 seconds and if you click 20 times in 4 seconds then throttle will twice
    //and debounce will fire only once

    return function () {
        if (throttleTimer) {
            return;
        }
        const context = this;
        const args = arguments;

        throttleTimer = setTimeout(() => {
            func.apply(context, args);
            throttleTimer = null;
        }, delay);
    };
};

button.addEventListener(
    "click",
    debounce(function () {
        console.log("Hello\nNo matter how many times you");
    }, 3000)
);

//https://stackoverflow.com/questions/27078285/simple-throttle-in-js
//Also check other throttle examples
