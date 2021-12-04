// Example of a WeakRef from MDN docs

class Counter {
    constructor(element) {
        // Remember a weak reference to the DOM element
        this.ref = new WeakRef(element);
        this.start();
    }

    start() {
        if (this.timer) {
            return;
        }

        this.count = 0;

        const tick = () => {
            // Get the element from the weak reference, if it still exists
            const element = this.ref.deref();
            if (element) {
                element.textContent = ++this.count;
            } else {
                // The element doesn't exist anymore
                console.log("The element is gone.");
                this.stop();
                this.ref = null;
            }
        };

        tick();
        this.timer = setInterval(tick, 1000);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    }
}

counterr = document.createElement("div");
counterr.id = "counterrr";
counterr.style.width = "200px";
counterr.style.height = "200px";
counterr.style.background = "yellow";
counterr.style.fontSize = "24px";
document.body.insertBefore(counterr, document.body.firstElementChild);

const counter = new Counter(document.getElementById("counterrr"));
setTimeout(() => {
    document.getElementById("counterrr").remove();
}, 5000);
