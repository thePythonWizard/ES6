// let width = 100;
// console.log(width);

// width = 200;
// console.log(width);

// function setWidth() {
//     let width = 300;
//     console.log(width);
// }
// setWidth();
// console.log(width);
/*
age = 100;
if (age > 20 ) {
    let dogYear = age * 7;
    console.log(`You are ${dogYear} old.`);
}

console.log(dogYear);

*/

/*****************************
 * Let vs Const
 */

/*
const key = 'abc123';
let points  = 50;
let winner = false;

// const can't be reassigned but object properties can be mutate but can change the value of it's object

const person = {
    name: 'Sid',
    age: 28
}
console.log(person);
// person = {name: 'Wes', age: 35};
console.log(person);
person.name = 'Sidharth';
console.log(person);

// There is something called Object.freeze by which i can't actually change 

const sid = Object.freeze(person);
*/

/********************************************************************************
 * 3 . Let and const in the real world
 */

// IIFE's immedietly invoked function expression's 
/*
(function() {
    var name = 'sid';
    console.log(name);
})();
// console.log(name); // logs ""

{
    const name = 'Wes';
    console.log(name);
}

// console.log(name);

for (var i = 0 ; i < 10 ; i++) {
    console.log(i);
    setTimeout(function() {
        console.log('The number is', i);
    }, 1000);
}
*/


/**************************************************************************************
 * 4. Temporal Dead Zone 
 */

// you can't access a variable untill you define it
/*
console.log(pizza);
var pizza = 'Mush-Room';  // when you define a variable using var and try to access it before the declaration you get undefined 

// But if you try the sam with let and const
console.log(dish);
let dish = 'Chilli potato';
// we get dish is not defined so that area is called temporal dead zone where we can't access that variable using let or const 

*/

/*****************************************************************************************
 * 6. Arrow function intoduction
 */
/*
const names = ['sid', 'mani', 'shub'];

const fullNames = names.map(function(name){
    return `${name} gupta`;
});

const fullNames2 = names.map( (name) => {
    return `${name} gem`;
});

const fullNames3 = names.map( (name) => `${name} fuck`);

const fullNames4 = names.map(name => `${name} you`);

console.log(names);
console.log(fullNames); 
console.log(fullNames2);
console.log(fullNames3);
console.log(fullNames4);

// When a function have a name is called named function
// Arrow function are anonymous function and we can't even find where are they defined

// Declaration of a anonymous function
const sayMyName = (name) => { alert(`Hello ${name}!`)};  // Actually this is a function declaration
sayMyName('siddharth');
*/

/******************************************************************************************
 * 7. More arrow function
 */

 /*
const race = '100m Dash';
const winners = ['Siddharth', 'Manish', 'Shubham'];

const win = winners.map((winner, i) => {
    return {name: winner, race: race, place: i+1};            // We can just use race instead of race: race,
});
// Here we are creating a object for every single one of winners

const ages = [23, 45, 56, 677, 60, 243];
const old = ages.filter((age) => {
    if (age>60) {
        return age;
    }
});
console.log(old);

// second way 
const olds = ages.filter(age => age>= 60);
console.log(olds);
*/

/*******************************************************************************************
 * 8. Arrow function and this
 */
/*
const box = document.querySelector('.box');
// console.log(box);
box.addEventListener('click', function() {
    let first = 'opening';
    let second = 'open';
    if(this.classList.contains(first)) {
        [first, second] = [second, first];
    }
    // console.log(this);
    this.classList.toggle(first);
    setTimeout(() => {
        this.classList.toggle(second);
    }, 500);
});
*/


/*************************************************************************************
 * Default Function Arguments
 */
/*
 function calculateBill(total, tax = 0.13, tip = 0.15) {
    //  if(tax==undefined) {
    //      tax = 0.13;
    //  }
    //  if (tip == undefined) {
    //      tip = 0.15;
    //  }
     return total + (total * tax)  +  (total * tip);
 }

 const totalBill = calculateBill(100, 0.13, 0.15);
 console.log(totalBill);

 let billAmount = calculateBill(100);
 let billAmount2 = calculateBill(100, undefined, 0.19);
 let billAmount3 = calculateBill(100, undefined, undefined); // we can pass undefined but we can not leave it empty like (100, , 0.19)
 console.log(billAmount);
 console.log(billAmount2);
 console.log(billAmount3);
 */


/***********************************************************************************
 * 10. When not to use an arrow funciton
 */
/*
// When you really need 'this'
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    this.classList.toggle('on');
});

// It will work because if we console.log(this) it will be the button we want to toggle but if we use arrow function () => here this will be inherited from the parent scope in this case it is <window> so this will be window not button so we can't use arrow function in this case.

// When you need a method to bind to an object
const person = {
    points: 23,
    // score: () => { // can't use arrow function here same reason as up this == window here
    score: function() {
        this.points++;
    }
}

// When you need to add a prototype method
class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('Subaru', 'white');

// Car.prototype.summarize = () => { can't use this same reason
Car.prototype.summarize = function () {
    return `This car is a ${this.make} in the colour ${this.colour}`;
};

// When you need areguments object
const orderChildren = function() {
    const childern = Array.from(arguments);
    return childern.map((child, i) => {
        return `${child} was child #${i + 1}`;
    });
    console.log(arguments);
};
*/

/******************************************************************************************
 * 11. Arrow Function exercises
 */

// Exercise 1 
// refer to 1.html

// Exercise 2:
/*
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const newNumbers = numbers.filter(number => number>=70);

console.log(newNumbers);
*/