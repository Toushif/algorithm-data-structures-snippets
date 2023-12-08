// https://www.codetinkerer.com/2019/01/14/cancel-async-requests-pattern.html
// Refer above example for better understanding of the pattern

const cancelFetchOnReentrySync = (wrappedFunc) => {
    let currentAbort = new AbortController();

    return (...args) => {
        currentAbort.abort();
        currentAbort = new AbortController();

        let mySignal = currentAbort.signal;

        const injectedFetch = (input, init = {}) =>
            fetch(input, {
                ...init,
                signal: createLinkedSignal(mySignal, init.signal),
            });

        return wrappedFunc(injectedFetch)(...args);
    };
};

const swallowCancellation =
    (wrappedFunc) =>
    async (...args) => {
        try {
            await wrappedFunc(...args);
        } catch (ex) {
            if (ex.name === "AbortError") {
                return; // Request has been canceled, so do nothing
            }

            throw ex;
        }
    };

const createLinkedSignal = (...signals) => {
    signals = signals.filter((s) => !!s);

    if (signals.length === 1) {
        return signals[0]; // Debugging is easier when we can avoid wrapping
    }

    let controller = new AbortController();
    for (let signal of signals) {
        signal.addEventListener("abort", () => controller.abort());
    }
    return controller.signal;
};

const cancelFetchOnReentry = (wrappedFunc) =>
    cancelFetchOnReentrySync((fetch) =>
        swallowCancellation(wrappedFunc(fetch))
    );

const loadData = cancelFetchOnReentry((fetch) => async (url) => {
    let response = await fetch(url);
    let data1 = await response.json();

    // let data2 = await getSomeOtherData();

    updateUI(data1, data2);
});

// If loadData gets called again while awaiting either the fetch() or response.json() calls, an AbortError will be raised by the original request and everything works as expected.
// 