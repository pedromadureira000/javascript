// useful dictionary unpacking with apis

const stats = {
    max: 55.66,
    standard_derivation: 53.5,
    median: 53.56,
    min: -0.54
};
const half = (function() {
    return function half( {max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(half(stats));

// create string using template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting)

// ----/ create object (dictionary)
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//-----/function inside object using 'this'
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//------------------------/POO/----------------------

