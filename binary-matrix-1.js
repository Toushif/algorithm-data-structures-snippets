//Binary matrix - https://www.tutorialspoint.com/distance-of-nearest-0-in-binary-matrix-in-javascript (Problem statement)

findNearestDistance = (arr = []) => {
    let array = [];

    let res = arr.map((el, ind) =>
        el.map((subEl, subInd) => {
            if (subEl === 0) {
                array.push([ind, subInd]);

                return 0;
            }

            return Number.MAX_SAFE_INTEGER;
        })
    );

    const updateAdjacent = (ind, subInd, min, array = []) => {
        if (
            ind < 0 ||
            subInd < 0 ||
            ind == arr.length ||
            subInd == arr[0].length
        ) {
            return;
        }

        if (res[ind][subInd] < min + 2) return;

        res[ind][subInd] = min + 1;

        array.push([ind, subInd]);
    };

    while (array.length) {
        let next = [];

        for (let [ind, subInd] of array) {
            updateAdjacent(ind, subInd + 1, res[ind][subInd], next);

            updateAdjacent(ind, subInd - 1, res[ind][subInd], next);

            updateAdjacent(ind + 1, subInd, res[ind][subInd], next);

            updateAdjacent(ind - 1, subInd, res[ind][subInd], next);
        }

        array = next;
    }

    return res;
};

findNearestDistance([
    [1, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
]);

Output - [2, 1, 0], [2, 1, 0], [3, 2, 1];

findNearestDistance([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
]);

Output - [0, 1, 1, 0], [1, 2, 2, 1], [1, 2, 2, 1], [0, 1, 1, 0];
