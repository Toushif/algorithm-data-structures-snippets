// What do the following lines output, and why? 

console.log(1 < 2 < 3); 
console.log(3 > 2 > 1);

// he first statement returns true which is as expected.

// The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.
