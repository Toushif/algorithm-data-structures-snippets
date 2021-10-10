const add = x => (y => x + y)

add(2) // returns (y => 2 + y)

add(2)(3)  // returns 5

const add2 = add(2) // returns function(y) { return 2 + y }
add2(3)             // returns 5

const three = a => b => c =>
  a + b + c

const four = a => b => c => d =>
  a + b + c + d

three (1) (2) (3) // 6

four (1) (2) (3) (4) // 10

//another interesting applicarions
const $ = x => k =>
  $ (k (x))
  
const add = x => y =>
  x + y

const mult = x => y =>
  x * y
  
$ (1)           // 1
  (add (2))     // + 2 = 3
  (mult (6))    // * 6 = 18
  (console.log) // 18
  
$ (7)            // 7
  (add (1))      // + 1 = 8
  (mult (8))     // * 8 = 64
  (mult (2))     // * 2 = 128
  (mult (2))     // * 2 = 256
  (console.log)  // 256

  //Partial application

  const partial = (f, ...a) => (...b) =>
  f (...a, ...b)

const add3 = (x, y, z) =>
  x + y + z

partial (add3) (1, 2, 3)   // 6

partial (add3, 1) (2, 3)   // 6

partial (add3, 1, 2) (3)   // 6

partial (add3, 1, 2, 3) () // 6

partial (add3, 1, 1, 1, 1) (1, 1, 1, 1, 1) // 3