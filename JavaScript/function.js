// First function without parameters
function addTwoNums() {
  var a = 10;
  var b = 20;
  var c = a + b;

  console.log(c);
}
addTwoNums();

// Second function with parameters
function subTwoNums(a, b) {
  var c = a - b;
  console.log(c);
}
subTwoNums(20, 10);
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
    //display the array item where the index is euqal to i
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors); //display all items in the array at once

//I can even add one or more conditions
function listArrayItems(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]=='red'){
            console.log(i*100,"tomato");

        }
        else{
            console.log(i*100,arr[i]);
        }
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

var greeting = 'Howdy'; 

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for(var i= 0;i<greeting.length;i++){
  console.log(greeting[i]);
}
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
