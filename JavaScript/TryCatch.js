try{
    throw new ReferenceError();
}
catch(err){
console.log(err)
console.log('There was a reference error')
}
console.log('The program does not stop')
