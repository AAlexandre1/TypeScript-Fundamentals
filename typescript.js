// Type inference
var message = "Welcome to the show!";
// By initializing the variable with a string, TypeScript infers that message should be type string
message = 234;
// trying to reassign a number to message will result in an error since message was infered to be type string
// Union types 
// adding | between types allows you to specify more than one type
var beRandom;
// beRandom can be either type string or type number or an array of booleans
beRandom = 54;
// 54 is a number so there is no error.
beRandom = "I like cheese.";
// "I like cheese" is a string so there is no number.
beRandom = [false, false, true, false, true];
// an array of booleans was specified and will not cause an error
beRandom = [54, "I like cheese,", false];
// The string and number in the array will cause an error
// an array of strings and numbers was not specified
// primitive types
var age;
// specifies the type that should be stored in the variable
age = "too old";
// gives an error because it is a string and not a number as specified.
console.log(age);
// compiling this presents an error but the code compiled still functions normally in JavaScript.
age = 33;
console.log(age);
// complex types
var flavors;
flavors = "chocolate";
// returns an error because it is a single string, not an array
flavors = ["vanilla", 4, "chocolate", true];
// returns an error because 4 and true are not strings.
flavors = ["chocolate", "vanilla", "strawberry"];
// this is correct becuase it is an array and all of the values in the array are strings
var isTasty;
// will ony allow an array of booleans
isTasty = [true, false, false, false, true, false];
// this would not return an error because all of the values in the array are booleans
isTasty = ["true", false, false, true, true, true];
// would return an error because "true is type string not type boolean
var course;
// denotes the an object and the type of key
course = {
    name: "Javascript",
    students: 43,
    time: "evening",
    complete: false
};
console.log(course);
var orders;
// denotes an array of objects. The type of each key in the object is specified. 
orders = [
    {
        name: "Jackson",
        flavor: "mocha",
        number: 8,
        filled: true
    },
    {
        name: "Linda",
        flavor: "matcha",
        number: 18,
        filled: false
    }
];
// Now the Person can be used any place you want that object as a type.
var singer;
singer = {
    name: "Taylor",
    age: 33
};
var applicants;
applicants = [
    {
        name: "Oliver",
        age: 23
    },
    {
        name: "Crystal",
        age: 20
    }
];
console.log(applicants);
