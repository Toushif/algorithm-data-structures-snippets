// What is "shallow freeze"?
// The result of calling Object.freeze(object) only applies to the immediate properties of object itself 
// and will prevent future property addition, removal or value re-assignment operations only on object. 
// If the value of those properties are objects themselves, those objects are not frozen and may be the 
// target of property addition, removal or value re-assignment operations.

const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city) // Output: "Noida"

// To make an object immutable, recursively freeze each property which is of type object (deep freeze). 
// Use the pattern on a case-by-case basis based on your design when you know the object contains 
// no cycles in the reference graph, otherwise an endless loop will be triggered. An enhancement to 
// deepFreeze() would be to have an internal function that receives a path (e.g. an Array) argument 
// so you can suppress calling deepFreeze() recursively when an object is in the process of being made immutable. 
// You still run a risk of freezing an object that shouldn't be frozen, such as [window].

function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null