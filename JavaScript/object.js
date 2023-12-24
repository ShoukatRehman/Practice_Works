// //creating an object with properties and their values
// var assistantManager = {
//     rangeTilesPerTurn: 3,
//     socialSkills: 30,
//     streetSmarts: 30,
//     health: 40,
//     specialAbility: "young and ambitious",
//     greeting: "Let's make some money"
// }
// var table = {
//     legs: 3,
//     color: "brown",
//     priceUSD: 100,
// }
// console.log(table.priceUSD);//display the object in the developer console
// var fruits = [];
// fruits.push("apple"); // ['apple']
// fruits.push('pear'); // ['apple', 'pear']
// fruits.pop();
// console.log(fruits); // ['apple']

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     console.log(arr);
// }
// arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     return arr;
// }
// var simpleArr = arrayBuilder('apple', 'pear', 'plum');
// console.log(simpleArr); // ['apple','pear','plum']

// //creating an object
// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false
//     }
// }
// console.log(virtualPet.sleepy) // true
// virtualPet.nap()
// console.log(virtualPet.sleepy) // false

// const bicycle = {
//     bell : function(){
//         return "Ring, ring! Watch out!";
//     }
// }
// const door = {
//     bell : function(){
//         return "Ring, ring! Come here please!";
//     }
// }


// console.log(bicycle.bell());
// console.log(door.bell());

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

class Vehicle {
    useWheels() {
        console.log("It has")
    }
}
class Motor extends Vehicle {
    useWheels() {
        super.useWheels()
        console.log("Two wheel to go!")
    }
}
class Car extends Vehicle {
    useWheels() {
        console.log("Driving!")
    }
}
var bmwMotor = new Motor();
var mercedesCar = new Car();

bmwMotor.useWheels(); 
mercedesCar.useWheels();


