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
//console.log(positiveNums);

// Exercise 3 - Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
    // NOTE: You are allowed to use Array.prototype.filter to answer this question.
    // NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
    
var mixed = [true, false, 0, NaN, 4, "yes", "no", undefined];

var truthy = mixed.filter(Boolean);
//console.log(truthy);


// Exercise 4 - Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
    // Hint: You can use String.prototype.split to split the string into an array of words.

function longestWord(string) {
    var wordArray = string.split(" ");  
    var longestWord = wordArray.reduce(function(longest, curr) {
        return curr.length > longest.length ? curr : longest;
    }, "");
    return longestWord;
}

console.log(longestWord("Happiness is a method of life, not a destination"));