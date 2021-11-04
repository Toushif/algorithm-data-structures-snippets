// Using JavaScript abortController to debounce a user input and abort fetch request if debounced.

function debounceFetch(fn, delay, onCancel = () => {}) {
    let timer = 0,
        isFetching = false;

    return function (...args) {
        clearTimeout(timer);

        if (isFetching) {
            onCancel();
            isFetching = false;
        }

        timer = setTimeout(() => {
            isFetching = true;
            fn(...args);
        }, delay);
    };
}

function getAbortable() {
    let controller;

    return {
        fetch: (url, opts = {}) => {
            controller = new AbortController();

            return fetch(
                url,
                Object.assign({}, opts, {
                    signal: controller.signal,
                })
            );
        },
        abort: () => controller.abort(),
    };
}

// Usage

const $input = document.querySelector("input");
const abortable = getAbortable();

$input.addEventListener(
    "input",
    debounceFetch(handleInput, 250, abortable.abort)
);

function handleInput({ target: { value } }) {
    abortable
        .fetch(`/api/search?q=${value}`)
        .then((res) => res.json())
        .then(console.log)
        .catch(console.error);
}
