// Type inference
let message = "Welcome to the show!";
// By initializing the variable with a string, TypeScript infers that message should be type string

message = 234;
// trying to reassign a number to message will result in an error since message was infered to be type string

// Union types 
// adding | between types allows you to specify more than one type

let beRandom: string | number | boolean[];
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

let age: number;
// specifies the type that should be stored in the variable

age = "too old";
// gives an error because it is a string and not a number as specified.

console.log(age);
// compiling this presents an error but the code compiled still functions normally in JavaScript.


age = 33;

console.log(age);



// complex types
let flavors: string[];

flavors = "chocolate";
// returns an error because it is a single string, not an array

flavors = ["vanilla", 4, "chocolate", true];
// returns an error because 4 and true are not strings.

flavors = ["chocolate", "vanilla", "strawberry"];
// this is correct becuase it is an array and all of the values in the array are strings


let isTasty: boolean[];
// will ony allow an array of booleans

isTasty = [true, false, false, false, true, false]
// this would not return an error because all of the values in the array are booleans

isTasty = ["true", false, false, true, true, true]
// would return an error because "true is type string not type boolean


let course: {
   name: string;
   students: number;
   time: string;
   complete: boolean
};
// denotes the an object and the type of key


course = {
   name: "Javascript",
   students: 43,
   time: "evening",
   complete: false
}

console.log(course);


let orders: {
   name: string;
   flavor: string;
   number: number;
   filled: boolean
}[];
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
]
// an array of objects where the type of each key is defined.


// Type alias
// eliminates type duplication in which multiple variables will use the same type. Mostly used for complex types rather than primitive types. 

// similar to a class in javascript

// Type alias creates a name for a base type that can be used elsewhere

// A type alias is defined using the type keyword. type keyword is unique to TypeScript and does not exist in JavaScript.


// The word after type will be the name of the type that you specify.
// everything after the equal sign is a type definition. It is not a JavaScript value.

type Person = {
   name: string;
   age: number;
};

// Now the Person can be used any place you want that object as a type.

let singer: Person;
// uses the type sepcified before

singer = {
   name: "Taylor",
   age: 33
};

let applicants: Person[];
// specifies an array of type Person

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


