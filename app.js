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

