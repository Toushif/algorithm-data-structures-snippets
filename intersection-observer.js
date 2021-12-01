// Example without intersection observer using native event listeners -

// Our HTML -
{
    /* <img src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300" />
<img src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300" />
<img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300" />
<img class="lazy" data-src="https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300" /> */
}

// JS-
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < window.innerHeight + scrollTop) {
                    img.src = img.dataset.src;
                    img.classList.remove("lazy");
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

// Now implementing the same lazy loading of iages using intersection observers-
// JS-
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function (
            entries,
            observer
        ) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        // fallback code..use the above event listeners code here
    }
});


// Native lazy loading of images -
// Just use the loading attribute with lazy value
/* <img src="example.jpg" loading="lazy" alt="..." />
<iframe src="example.html" loading="lazy"></iframe> */

// The following values are supported by the loading attribute:

// lazy - Deferring the loading of assets till it reaches a certain distance from the viewport.
// eager - loading the assets as soon as the page loads, irrespective of where they are placed on the page, whether above or below the page fold.
// auto - This value triggers default lazy loading. Basically, it's the same as not including the loading attribute.