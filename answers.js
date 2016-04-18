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
    var longWord = wordArray.reduce(function(longest, curr) {
        return curr.length > longest.length ? curr : longest;
    }, "");
    return longWord;
}

//console.log(longestWord("Happiness is a method of life, not a destination"));


// Exercise 5 - Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
    // Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
    // Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.
    
function countVowels(string) {
    var charArray = string.toLowerCase().split('');
    var numVowels = charArray.reduce(function(acc, curr) {
        if (curr === "a" || curr === "e" || curr === "i" || curr === "o" || curr === "u") {
            acc++;
        }
        return acc;
    }, 0);
    return numVowels;
}

//console.log(countVowels("Happiness is a method of life, not a destination"));


// Exercise 6 - Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.
    // For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
    // Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)

var nums3 = [1, -10, 20, 40, 5];
  
function highLow(array) {
    var obj = array.reduce(function(acc, curr) {
        if(curr > acc.highest) {
            acc.highest = curr;
        }
        if(curr < acc.lowest ) {
            acc.lowest = curr;
        }
    return acc;
    
    }, {highest: -Infinity, lowest: Infinity});
    return obj;
}

//console.log(highLow(nums3));


// Exercise 7 - Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

var nums4 = [1, -10, 20, 40, 5];
  
function highLowTwo(array) {
    var obj = array.reduce(function(acc, curr) {
        if(curr > acc.highest) {
            acc.secondHighest = acc.highest;
            acc.highest = curr;
        }
        if(curr < acc.lowest ) {
            acc.secondLowest = acc.lowest;
            acc.lowest = curr;
        }
    return acc;
    
    }, {highest: -Infinity, secondHighest: 0, lowest: Infinity, secondLowest: 0});
    return obj;
}

//console.log(highLowTwo(nums4));


/* Exercise 9 - Starting on week 3 of the bootcamp, we will be learning about databases. Databases are useful for saving data for long periods of time.

Contrary to a JavaScript program, where all the data disappears when the program terminates, databases keep their data "forever".

In this exercise, we're going to imagine that we are storing people information in a database, and that we queried our database to retrieve a list of people.

Our database returns to us an array of people objects, and each of them has a unique ID that the database uses to refer to it.

For this exercise, we want to use Array.prototype.reduce to transform our array of people into an object, keyed with the unique ID.

This object could be useful if we are often looking up people by their unique ID.

Write a function called peopleById that takes an array of people and returns an object where each person is keyed by their unique ID.

You have effectively created what we call an index, not unlike the one you have in your phonebook.
*/

var dbArray = [
  {
    id: "KeXoYg92is",
    firstName: "John",
    lastName: "Smith",
    email: "john@smith.com"
  },
  {
    id: "NkALmSWtUp",
    firstName: "Donald",
    lastName: "Duck",
    email: "don@disney.com"
  },
  {
    id: "m7LPbJYSUg",
    firstName: "John",
    lastName: "Vader",
    email: "vader@darkside.com"
  }
];

function peopleById(arr) {
    return arr.reduce(function(acc, next){
        acc[next.id] = next; // set new key on empty object and asign the entire object (person) to it
        return acc;
    }, {});
}

//console.log(peopleById(dbArray));


/* Exercise 10 - Expanding on the previous exercise, this time we are going to create an index on first names. Notice how in the previous exercise, each ID was unique. In this case, two people have the same first name.

We want to create a function called peopleByFirstName that will take an array of people.called

You have effectively created an index on first name. This lets you find all people called, say, "John" without having to look through the whole results.
*/

var dbArray2 = [
  {
    id: "KeXoYg92is",
    firstName: "John",
    lastName: "Smith",
    email: "john@smith.com"
  },
  {
    id: "NkALmSWtUp",
    firstName: "Donald",
    lastName: "Duck",
    email: "don@disney.com"
  },
  {
    id: "m7LPbJYSUg",
    firstName: "John",
    lastName: "Vader",
    email: "vader@darkside.com"
  }
];

function peopleByFirstName(arr) {
    return arr.reduce(function(acc, next) {
        if(!acc[next.firstName]){ // if the key does not already exist
            acc[next.firstName] = [];  // create key
            acc[next.firstName].push(next);  // push the person object to that key
        } 
        else { // if the key already exists
            for(var prop in acc) { // for each of the properties in the object
                if(prop === next.firstName) { // check if the property matches the first name of the person object we want to add
                    acc[next.firstName].push(next); // push the person object to the correct key
                }
            }
        }
        
    return acc;
    }, {});
}

//console.log(peopleByFirstName(dbArray2));


// Simplified version after walkthrough in class

function peopleByFirstName(arr) {
    return arr.reduce(function(acc, next) {
        if(!acc[next.firstName]){ // if the key does not already exist
            acc[next.firstName] = [];  // create key
        }
        acc[next.firstName].push(next);  // push the person object to that key
        return acc;
    }, {});
}

console.log(peopleByFirstName(dbArray2));