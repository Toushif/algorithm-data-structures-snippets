debounce = (func, delay) => {
    let debounceTimer; //this acts a closure and stays in browser heap memory,
    //so every time click is called debounceTimer is the same
    //variable being accessed from memory. So if you click
    //button before the completion of 3 seconds then, the existing
    //setTimeout will be cleared in the heap memory and again
    //a new one will be triggered. So no matter how many times you
    //click on button within 3 seconds completion, the actual function
    //inside debouce wont get called.
    return function () {
        const context = this;

        const args = arguments;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

button.addEventListener(
    "click",
    debounce(function () {
        console.log("Hello\nNo matter how many times you");
    }, 3000)
);
