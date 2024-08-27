// Immediate Invoked Function Expression

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); //; is very important

( (name)=> {
    console.log(`DB CONNECTED TWO  ${name}`)
})('bharat')