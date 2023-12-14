/* inline type annotation example */
let banditOne: {
  name: string;
  age: number;
  beltColour: string;
};
banditOne = { name: "mario", age: 25, beltColour: "brown" }; //here we used let so we could assign it later, or reassign it

// or
const banditTwo: {
  name: string;
  age: number;
  beltColour: string;
} = { name: "mario", age: 25, beltColour: "brown" }; //here we use const and assign it immediately because we have to, and it cannot be reassigned
//banditTwo = {}

/* named interface example */
interface Cowboy {
  name: string;
  age: number;
  gun: string;
}
const cowboyOne: Cowboy = {
  name: "Doc Holiday",
  age: 34,
  gun: "revolver",
};

/* type declaration example */
type Pirate = {
  name: string;
  age: number;
  sword: string;
};
let pirateOne: Pirate = {
  name: "Jack Sparrow",
  age: 49,
  sword: "cutlass",
};
