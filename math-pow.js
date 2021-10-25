// Given two integers x and n, write a function to compute xn. We may assume that x and n are small and overflow doesn’t happen.

// Below solution divides the problem into subproblems of size y/2 and call the subproblems recursively.
// Time Complexity: O(n)
// Space Complexity: O(1)
function power(x, y) {
    if (y == 0) return 1;
    else if (y % 2 == 0)
        return power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10));
    else
        return (
            x * power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10))
        );
}

// Divide and conquer.
// Time Complexity of optimized solution: O(logn)
// Auxiliary Space: O(1)
function power(x, y) {
    var temp;
    if (y == 0) return 1;
    temp = power(x, y / 2);
    if (y % 2 == 0) return temp * temp;
    else return x * temp * temp;
}

// extend the pow function to work for negative y and float x.
// Time Complexity: O(log|n|)
// Auxiliary Space: O(1)
function power(x, y) {
    var temp;

    if (y == 0) return 1;

    temp = power(x, parseInt(y / 2));

    if (y % 2 == 0) return temp * temp;
    else {
        if (y > 0) return x * temp * temp;
        else return (temp * temp) / x;
    }
}

// Using recursion
// Time Complexity: O(n)
// Auxiliary Space: O(1)
function power(x, y) {
    // If x^0 return 1
    if (y == 0) return 1;

    // If we need to find of 0^y
    if (x == 0) return 0;

    // For all other cases
    return x * power(x, y - 1);
}


console.log(power(7, 3)); // 343