var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function () {
        var fullname = this.firstname + " " + this.lastname;

        return fullname;
    },
};

var person2 = {
    firstname: "Jane",
    lastname: "Doe",
};

console.log(person.getFullName.apply(person2)); //Jane Doe

//So above example we are borrowing functions. Person2 object does not have getFullName,
//so we borrow it from person object but still have the reference of person2 object
//by using apply method to pass person2 object to the function of person.
//This was we can use these methods to other functions in other objects anytime.
//But remember you must have similar property names for the function to work properly.
