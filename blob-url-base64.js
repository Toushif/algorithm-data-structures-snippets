// https://www.javatpoint.com/javascript-blob

// Example 1
var blob = new Blob(["Javatpoint"], { type: "text/plain" });
var def = new FileReader();
def.addEventListener("loadend", function (e) {
    document.getElementById("main").innerHTML =
        e.srcElement.result + blob.type + blob.size; //Read more about blob
});
def.readAsText(blob);

// JavaScript Blob URL's
let abc = new Blob(["Javatpoint"], { type: "text/plain" });
var a = document.createElement("a");
var fileName = "hello.txt";
a.setAttribute("download", fileName);
a.setAttribute("href", URL.createObjectURL(abc));
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// Blob to base64
var blob = new Blob(['one,two,three'], { type: 'text/csv' });
var a = document.createElement("a");
var fileName = "hello.txt";
a.setAttribute("download", fileName);
document.body.appendChild(a);

let reader = new FileReader();
reader.readAsDataURL(blob);
reader.onload = function () {
    a.href = reader.result; // data url
    a.click(); //this will download a csv file
    document.body.removeChild(a);
};
