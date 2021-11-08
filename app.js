//------------- HIGH ORDER FUNCTIONS -------------
//SORT
// let list = [10, 20, 1, 2, 3, 4, 56, 45, 23, 1, 2, 3, 4, 5, 6, 7, 0].sort(
//   (a, b) => {
//     return a - b;
//   }
// );
// console.log(list);

//REDUCE
//FOREACH
//MAP
//FILTER
//FLAT
//SOME
//EVERY
//INDEXOF
//INDEX
//FIND

//------------- ARRAY METHODS -------------
//POP
//PUSH
//SHIFT
//UNSHIFT
//SPLICE
//SPLIT
//SLICE
//INDEXOF
//ISARRAY
//ARRAY.FROM
//OF
//OBSERVE
//LENGTH
//PROTOTYPE

// ------------- STRING METHODS -------------
//------------- OBJECT METHODS -------------
//OBJECT KEY
//OBJECT VALUE
//OBJECT.OBSERVE
//------------- NUMBER METHODS -------------

// OOP
//FACTORY FUNCTION ----- if return object that is factory function

// function createFactory(factory) {
//   return {
//     factory, // facotry: factory ES6 syntax
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createFactory(2); // createFactory(2).draw()
// circle.draw();
// console.log(circle.factory); // 2

// CONSTRUCTOR FUNCTION ------ if we use "this" keyword along "new" operator that is constructor function
// function CreateConstructor(params) {
//   this.params = params; // this keyword is referring to this object named "CreateConstructor" --- return object, call object and finally point to this object within -- this - also outside of this function point to global window
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const con = new CreateConstructor(2);
// con.draw();
// ...
function FlyTo(p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
  this.travel = function () {
    console.log(`${this.p1} - ${this.p2} - ${this.p3}`);
  };
}
// const trip = new FlyTo("USA", "Germany", "Japan").travel(); // trip.travel()
// const tour = new FlyTo("Turkey", "Russia", "Canada").travel();
const tour = new FlyTo("Turkey", "Russia", "Canada");
// tour.address = { value: 1, key: 2 };
// console.log(tour.address);

// for (let key in tour) {
//   //   if (typeof tour[key] !== "function") console.log(tour[key]); //  'value' is tour[key]
//   //   if (typeof tour[key] === "function") console.log(key); // 'key' is key
//   console.log(tour[key], key);
// }

// let objKeys = Object.keys(tour);  // all keys of "tour" function was returned in an array ---- same as """for in loop"""
// console.log(objKeys);

// let objValues = Object.values(tour); // all values of "tour" function was return in an array ---- same as """for of loop"""
// console.log(objValues);

// if ("p1" in tour) console.log("p1 is in tour, exactly"); // another version of include in javascript

// PRIMITIVES ARE COPIED BY THEIR VALUES - IN CONTRAST OBJECTS (OBJECT, FUNCTION, ARRAY) ARE COPIED BY THEIR REFERENCES
// ABSTRACTION ----- HIDE THE DETAILS AND SHOW ONLY ESSENTIAL --- CORE CONSEPT OF OOP FOR ABSTRACTION ----- TO HIDE IMPLEMENTATION DETAILS NEED TO DECLARE IT INSIDE A FUNCTION AS A LOCAL VARIABLE, THANKS FOR THIS IT WILL BE HIDDEN FOR OUTSIDE --- IT CALLS AS A PRIVATE METHOD
// SCOPE IS TEMPORARY BUT CONTRAST TO SCOPE, CLOSER STAYS INSIDE FUNCTION AND CAN RECREATED BY USING THAT FUNCTION
