// Day 5 - JS - DecodeMTL Array methods workshop

// Exercise 1 - Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var numbers1 = [1,2,3,4,5,6,7,8,9,10];
var positives = [];

function printPositives(array) {
    array.forEach(function(number) {
        if(number % 2 === 0) {
            positives.push(number);
        }
    });
    return positives;
}
    
//console.log(printPositives(numbers1));


// Exercise 2 - Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

var numbers2 = [-2, -4, 5, 6, 1, -8, 0, 34];

function getPositives(number) {
    return number >= 0 ? true : false;
}

var positiveNums = numbers2.filter(getPositives);
console.log(positiveNums);

