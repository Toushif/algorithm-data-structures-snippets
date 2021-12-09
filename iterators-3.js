const engineeringTeam = {
    Size: 3,
    Department: "Engineering",
    Lead: "Jill",
    Manager: "Alex",
    Engineer: "Dave",
};

//Here above we have an object. So, we want to iterate this object and only want the names of //people involved. We don't want size or department or other variables which aren't name. So //how to iterate this object?

//We use function iterators here like the following -

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names); // [JIll, ALex, Dave]

// So above you can see how we are using function iterables to custom iterate the object above through very particular properties.
// Continuation of above example – Generator Delegation -
//  From the above example now, we have a testing team as a part of the engineering team as follows -

const testingTeam = {
    Lead: "Amanda",
    Tester: "Bill",
};

const engineeringTeam = {
    Size: 3,
    Department: "Engineering",
    Lead: "Jill",
    Manager: "Alex",
    Engineer: "Dave",
    testingTeam,
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;

    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names); // [JIll, ALex, Dave, Amanda, Bill]

// So above you can see how we are iterating an object inside another object through iterable generator functions.
// Now refactoring the above code using Symbol.Iterator-

const testingTeam = {
    lead: "Amanda",
    tester: "Bill",

    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    },
};

const engineeringTeam = {
    size: 3,
    department: "Engineering",
    lead: "Jill",
    manager: "Alex",
    engineer: "Dave",
    testingTeam,

    *[Symbol.iterator]() {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    },
};

const names = [];

for (let name of engineeringTeam) {
    names.push(name);
}

console.log(names); // [JIll, ALex, Dave, Amanda, Bill]

// Above you can see how we refactored the code using Symbol.Iterator inside the inner object to iterate through it.

// Above example we are only iterating only one level deep object. What if we have n-level deep object of objects? For that we have to do something like this -

class Comment {
    constructor(content, children) {
        this.content = content;

        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;

        for (let child of children) {
            yield* child;
        }
    }
}

const children = [
    new Comment("Good comment", []),
    new Comment("Bad comment", []),
    new Comment("Toushif", []),
];

const tree = new Comment("Main Post", children);
const values = [];

for (let value of tree) {
    values.push(value);
}

values; // [Main Post, Good comment, Bad comment, Toushif]
// Above syntax you can see how we can iterate through n-level deep object using for of loop inside Symbol.Iterator itself.
