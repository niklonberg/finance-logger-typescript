// <-- means line is invalid typescript

/* ------------------------------ lesson 10 function signatures
//we have already seen how to assign a function type
//to a variable like so:
//let greet: Function;
//this variable will be able to be assigned any function and only a function

//we can be more specific about what type of function it can hold
//by defining a function signature

// example 1
//define function signature:
let greet: (a: string, b: string) => void;
//assign function to greet, matching the signature
//if i try to set name or greeting to anything but a string, I get an error:
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  }

  return 0;
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
*/

/* ------------------------------ lesson 9 type aliases
//when working with functions, the parameters in them might start to get really long
//and are also duplicated bits of code
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} say hello`);
};

const greetAgain = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} say hello again`);
};
// instead of the above, we can do this:
// define type aliases:
type StringOrNum = string | number;
type objWithName = {name: string, ui: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} say hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} say hello again`);
};
//these can be used in our functions:
*/

/* ------------------------------ lesson 8 function basics
let greet = () => {
  console.log("hello world"); //typescript automatically infers that greet is of type fn
};

//greet = 'hello'

//we can be explicit like so:
let greet: Function;

greet = () => {
  console.log("hello, again");
};
// we can add optional parameters like below at c using ? //if you use a default value, ? can be omitted
//always set optional/default parameters at the end
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, "29b");

//implicit fn type
const minus = (a:number, b:number) => {
  return a - b // here, 
}

let result = minus(10, 7) typescript will infer the type that is returned, in this case a number
//result = 'something else'

//we can be more explicit like below, adding : after () to say what type will be returned
//it isnt strictly needed, but will show other developers what will be returned
const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
*/

/* ------------------------------ lesson 6 dynamic(any) types
USE WITH CAUTION, THIS IS ESSENTIALLY REVERTING BACK TO JAVASCRIPT
let age: any = 25; //type any
age = true;
log(age);
age = "hello";
log(age);
age = { name: "luigi" };

let mixed: any[] = [];
mixed.push(5);
mixed.push("luigi");
mixed.push(true);
log(mixed);

let ninja: { name: any; age: any };
ninja = { name: "yoshi", age: 25 };
log(ninja);
ninja = { name: 25, age: "yoshi" };
log(ninja); */
/*-------------------------------lesson 5 explicit-types
//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi'
age = 30;

//isLoggedIn = 25;
isLoggedIn = true;

let ninjas: string[]; //here we have declared a type for ninjas, but we have not assigned it an empty array, so atm its undefined
//ninjas = [10, 30]
//ninjas.push('yoshi')
ninjas = ["mario", "luigi"];

let bandits: string[] = []; //here we both declare the type and instantiate it
bandits.push("sauron"); //which means we can use string methods
bandits = ["saruman"]; //can be reassigned
log(bandits);

//union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
//mixed.push(false)
mixed.push(false);
log(mixed);

let uid: string | number;
uid = "hi";
uid = 123;
//uid = false

let ninjaOne: object; //set ninjaOnes type to object
ninjaOne = { name: "yoshi", age: 12 };
ninjaOne = []; //since arrays are a type of object, this is allowed
log(ninjaOne);

//we can be more specific though
//here we are setting up an object definition
let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};
ninjaTwo = { name: "mario", age: 25, beltColour: "brown" }; */

/*--------------------------------------lesson 4
//arrays
let names = ["mario", "yoshio", "luigi"];

//names = 'hello'

names.push("toad");
//names.push(8);
//names[0] = 3;

let nums = [1, 3, 5];
nums.push(10);
//nums.push("lisa");
//num[1] = "gert";

let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
//mixed[1] = true
log(mixed);

//objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 35,
};
ninja.age = 40;
ninja.name = "ryu";
//ninja.age = '30'
ninja.skills = ["fighting", "sneaking"];

//ninja = 'bert'
ninja = {
  name: "luigi",
  belt: "white",
  //age: 40 if this is missing, the reassignment wont work
  //age: 'chips' also cant change its type
  age: 31,
  //skills: [] also cant add properties that didnt exist to begin with
}; */

/*------------------------------------------  lesson 2-3
let character = "luigi";
let age = 30;
let isBlackBelt = true;

//character = 20
character = "luigi";

//age = 'yoshi'
age = 40;

//isBlackBelt = 'mario'
isBlackBelt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

//log(circ("hello"));
log(circ(7.5));
 */
