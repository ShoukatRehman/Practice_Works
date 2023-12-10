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
