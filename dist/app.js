import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payments.js";
import ListTemplate from "./classes/ListTemplate.js";
let docOne; //ensure that whatever object is stored inside this variable in the future
let docTwo; //has to implement the HasFormatter interface
docOne = new Invoice("yoshi", "webwork", 250); //CAN be an invoice
docTwo = new Payment("mario", "stomping", 50); //Can be a payment, because they both implement HasFormatter interface
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//here we create an object, that strictly follows the 'blueprint' from IsPerson
const me = {
    name: "Nikolai",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    },
    //skills: [] not allowed
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
console.log(me);
greetPerson(me);
//greetPerson({ name: "shaun" }); will work, but complains of an error
// classes
const invoiceOne = new Invoice("Betina", "Haircut", 20);
const invoiceTwo = new Invoice("Luigi", "Plumbing", 40);
//create array that can only contain Invoices:
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
/* const anchor = document.querySelector("a")!; //as dev. i KNOW this will not be null

console.log(anchor.href); //without !, there would be an error line under anchor, saying anchor might be null */
//const form = document.querySelector('form')! //if we have multiple forms:
//we might need to use class instead, however, now if we hover over form,
//it says its just an Element, it doesnt know what type of element it is:
//const form = document.querySelector('.new-item-form');
//to combat this, we can use something called type casting:
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
//modified event listener at the bottom
/* form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // we can use valueAsNumber to immediately convert to number type
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
}); */
//generics
//allow us to create reusable blocks of code,
//which can be reused with different types
//create method to take in an object, and create a uid property for it.
//const addUID = (obj: object) => {
//  let uid = Math.floor(Math.random() * 100);
//  return { ...obj, uid };
//};
//let docThree = addUID({ name: "peach", age: 40 });
//below doesnt work, because it doesnt know what properties obj will have.
//console.log(docThree.name)
//in comes generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//when we use <T>, it will capture the properties of the object, so console.log(docThree.name) wont have error line
// can use <T extends object> for a generic object, but we can be more specific too
// <T extends {name: string}> <-- this would mean only an object with a name: string can be put inside
let docThree = addUID({ name: "peach", age: 40 });
//let docFour = addUID('hello')
console.log(docThree.name);
const docFour = {
    uid: 14,
    resourceName: "person",
    data: { name: "shaun" },
};
const docFive = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk"],
};
console.log(docFour);
console.log(docFive);
// ENUMS
//if resourceType were indexed numbers, 2 = book, 3 = person etc, it could become hard to maintain
//in comes enums
var StockType;
(function (StockType) {
    StockType[StockType["BOOK"] = 0] = "BOOK";
    StockType[StockType["AUTHOR"] = 1] = "AUTHOR";
    StockType[StockType["FILM"] = 2] = "FILM";
    StockType[StockType["DIRECTOR"] = 3] = "DIRECTOR";
    StockType[StockType["PERSON"] = 4] = "PERSON";
})(StockType || (StockType = {}));
const docSix = {
    uid: 1,
    resourceType: StockType.BOOK,
    data: { title: "name of the wind" },
};
const docSeven = {
    uid: 10,
    resourceType: StockType.PERSON,
    data: { title: "yoshi" },
};
console.log(docSix, docSeven);
//when we log docSix and seven, resourceTypes value IS a number, corresponding to StockType
//six, which is book resourceType is 0
//seven, which is person resourceType is 5
//so we no longer need to keep track of the numbers
// TUPLES
// tuples are much like arrays, except
//THE TYPES OF DATA IN EACH POSITION IS FIXED, ONCE IT HAS BEEN INITIALIZED:
//below regular array:
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "luigi"];
//below tuple
let tup = ["ryu", 25, true]; //here each index much contain the specified data type
//tup[0] = false
tup[0] = "ken";
tup[1] = 30;
let student;
student = ["chun-li", 29];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
