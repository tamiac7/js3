// JavaScript Coding Challenge

// 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.


// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.


// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.


// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.


// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.


// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.


// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.


// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.


// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.


// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.


// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.


// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.


// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.


// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.


// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.


// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.


function createPerson() {
    return person = {
        name: 'Tamia', 
        age: 28, 
    };
}

function logPersonProperties(person) {
    console.log(person.name); // Dot notation
    console.log(person.age); // Dot notation
}

function modifyAge(person) {
    person.age = 30;
}

function addJob(person) {
    person.job = 'Developer'; // Add property
}

function deleteAge(person) {
    delete person.age; // Delete property
}

function addGreet(person) {
    const person = {
        name: 'Tamia',
        greet: function () {
            console.log('Hello, my name is ' + this.name);
        }
    }
     person.greet(); // Output: 'Hello, my name is Tamia'
}

function createNumbersArray(numbers) {
    const numbers = numbers[1, 2, 3, 4, 5];
}

function logFirstAndThird(numbers) {
    console.log(numbers[0]); // Accessing the first element
    console.log(numbers[2]); // Accessing the third element
}

function modifySecond(numbers) {
    numbers[1] = 10; // Modifying the second element
}

function logLength(numbers) {
    console.log(numbers.length); // Output: 5
}

function iterateWithFor(numbers) {
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

function iterateWithWhile(numbers) {
    const numbers = [1, 2, 3, 4, 5];
    let i = 0;

    while (i < numbers.length) {
        console.log(numbers[i]);
        i++;
    }
}

function iterateWithForOf(numbers) {
    const numbers = [1, 2, 3, 4, 5];
    for (const number of numbers) {
        console.log(number);
    }
}

function createJSON(person) {
    person = 'json'
}

function parseJSON(json) {
    const json = JSON.parse(json)
}

function stringifyPerson(person) {
    const jsonString = JSON.stringify(person);
    console.log(jsonString);
}