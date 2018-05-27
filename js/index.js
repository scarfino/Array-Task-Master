/*
Perform the same task on each element within an array.
@scarfino 2018
*/

// .forEach()
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//execute same code on each element with forEach()
fruits.forEach(function(fruitsItem){
console.log('I want to eat a ' + fruitsItem);
});
console.log('');


//Refactored using Arrow function syntax.
fruits.forEach(fruitsItem => console.log('I want to eat a ' + fruitsItem));
