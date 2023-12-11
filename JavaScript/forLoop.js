const colors = ['red','yellow','blue']
for( var color of colors){
    console.log(color);
}
// Built-in methods 
const car2 = { 
    speed:200,
    color:"red"
}
console.log(Object.keys(car2)); //  Object.key()

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3));   //   Object.values

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));    //   Object.entries

              // Example 01

var clothingItem = {
    price : 50,
    color : 'beige',
    material : 'cotton',
    season : 'autumn'
}
for(const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key])
}

// Example 02 
function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    var drone = {
        speed: 15,
        color: "orange"
    }
    console.log(drone[dynamicKey]);
}

testBracketsDynamicAccess();

//       Example 03
const car = {
    engine:true,
    steering:true,
    speed:"slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar Object :",sportsCar);

console.log('----for-in is unreliable----');
for(prop in sportsCar){
    console.log(prop);
}
console.log('🤔',"Iternating over object AND its prototype!");

console.log('----for-of is reliable----');
for(prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}
console.log('😂',"Iternating over objects OWN properties only!");

//              Example 04
const car5 = {
    engine:true
}
const sportsCar1 = Object.create(car5);
sportsCar1.speed = "fast";
console.log("The sportsCar Object:",sportsCar1);

for(prop in sportsCar1){
    console.log('🤔',prop);    
}
for(prop of Object.keys(sportsCar1)){
    console.log('😁',prop + ": " + sportsCar1[prop]);
}