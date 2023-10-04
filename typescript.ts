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

beRandom = true;
// since an array of booleans was specified, a single boolean can not be assigned to this variable

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


//Functions and types

function add(a: number, b: number) {
   return a + b;
}

function address(houseNumber: number, street: string): string {
   return houseNumber + street;
}
// the type the function returns can also be specified after the parameters

function prinntOutPut(value: any) {
   console.log(value);
}
// since this function does not have a return statement it has a special return type of void
// Void is comparable to null and undefined but it is only for functions
// It means the the function never returns
// When working with the return value for this function it will be undefined


// Generics

function insertAtBeginning(array: any[], value: any) {
   const newArray = [value, ...array];
   return newArray;
}
// ...array copies the existing array using the spread operator
// this function takes an array and adds the value entered to the front of the array

// because type any was specified in the function TypeScript does not infer that the array we are using is an array of numbers


const testArray = ['Chocolate', 'Vanilla', 'Strawberry'];

const updatedTestArray = insertAtBeginning(testArray, 'Butter Pecan');
// value of the updated array will be ['Butter Pecan', 'Chocolate', 'Vanilla', 'Strawberry']

updatedTestArray[0].split('');


const demoArray = [1, 2, 3];

const updatedDemoArray = insertAtBeginning(demoArray, -1);
// the value of the updated array will be [-1, 1, 2, 3];

updatedDemoArray[0].split('');
// This tries to split the value at index 0 which is -1
// splt can not be called on a number so this will create a run time error
// TypeScript allows this because it does not know that the value is a number since we specified type any



// Generic Function

function insertAtBeginning2<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray;
}
// Adding <T> or <Type> after the function name but before the parameters specifies a generic type (any identifier can be used but T and Type are standard practice)
// This generic type will only be available inside of this function
// It tells TypeScript to look at the type of the values of the parameters and that they should be the same

// Using a generic type allows for flexibile and type safe functions

// This function will work with any type, but once a type is used it is locked in for THAT execution of the function


const demoArray2 = [1, 2, 3];

const updatedDemoArray2 = insertAtBeginning2(demoArray2, -1);
// The function understands that the type of the array and the type of the value are numbers
// TypeScript knows that the result of the function has to be an array of numbers 

updatedDemoArray2[0].split('');
// TypeScript will now warn that split is being called on a number


// Classes and Interfaces

class Student {
   name: string;
   age: number;
   private courses: string[];
   gradYear: number;
   // In TypeScript the properties for the class can be defined in advance unlike in JavaScript   

   constructor(name: string, age: number, courses: string[], gradYear: number) {
      this.name = name;
      this.age = age;
      this.courses = courses;
      this.gradYear = gradYear;
   }

   // In TypeScript properties can be defined and assigned at once
  /* 
   constructor(
      public name: string;
      public age: number;
      private courses: string[];
      public gradYear: number
   ) {}
  */ 
   // This is short hand for defining the properties and types, and assigning values to those properties

   // the method of the class
   enroll(courseName: string) {
      this.courses.push(courseName);
   }
   // When creating a method in TypeScript it differs from creating a method in JavaScript by omitting the functtion keyword before the method name. 

   // In TypeScript, uniike in JavaScript, properties and methods can be specified as public or private
   // Public properties and methods can be accessed from outside of the class
   // Private classes and methods can only be accessed from inside of the of the class
};

const student1 = new Student('Taylor', 33, ['Guitar', 'Songwriting', 'Piano'], 2006);

student1.enroll('Singing');