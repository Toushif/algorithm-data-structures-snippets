// Multiple Pointers - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// One Liner
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
