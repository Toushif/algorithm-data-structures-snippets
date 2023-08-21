// The abort() method of the AbortController interface aborts a DOM request before it has completed. This is able to abort fetch requests, the consumption of any response bodies, or streams.

// We first create a controller using the AbortController() constructor, then grab a reference to its associated AbortSignal object using the AbortController.signal property.

// When the fetch request is initiated, we pass in the AbortSignal as an option inside the request's options object (the {signal} below). This associates the signal and controller with the fetch request and allows us to abort it by calling AbortController.abort(), as seen below in the second event listener.

var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector(".download");
var abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", function () {
    controller.abort();
    console.log("Download aborted");
});

// When abort() is called, the fetch() promise rejects with an Error of type DOMException, with name AbortError.
async function fetchAPI() {
    let res = await fetch(url, { signal });
    res.then(resposnse => resposnse.json())
    .catch(err => console.log(err.message))
}