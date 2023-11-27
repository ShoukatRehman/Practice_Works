let counter = 3;
function example(){
    console.log(counter);
    counter = counter - 1;
    if(counter === 0)
    return;
example();

}
example()
//Q02
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);