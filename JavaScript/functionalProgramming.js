var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount,rate){
    return amount * rate;

}
currencyTwo = convertCurrency(currencyOne,exchangeRate);
console.log(currencyTwo);
// simple 01
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);