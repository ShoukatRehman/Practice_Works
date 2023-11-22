// Question no 01
try{
    throw new ReferenceError();
}
catch(err){
console.log(err)
console.log('There was a reference error')
}
console.log('The program does not stop')
//             Question no 02

function addTwoNums(a,b){
    try {
if(typeof a != 'number'){
    throw new ReferenceError('the first argument is not a number')
}
else if(typeof b != 'number'){

    throw new ReferenceError('the second argument is not a number')
}
else{
    console.log(a + b)
}
    }catch(err){
        console.log("Error!",err);
    }

}
addTwoNums(5,"5")
console.log("It still works")

//                   Question no 03
function letterFinder (word,letter){
    const condition1 = typeof(word) == 'string' && word.length >= 2;
    const conditon2 = typeof(letter) == 'string' && letter.length === 1;

    if(condition1 && conditon2){
        for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        console.log(`Letter found at index ${i}`);
        return true;
      }
        }console.log("Letter not found");
    return false;
  } 
  else {
        console.log("Please pass correct arguments to the function.");
  }

}
letterFinder(5, 10);

letterFinder("cat", "c");
try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }