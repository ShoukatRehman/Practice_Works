var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
var i = 3;
var j = 5;

if(i == 3 && j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

var i = 7;
var j = 2;

if(i < 7 || j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}