// primitive dtatype

// 7 types => string ,number ,boolean, null, undefined, symbol, Bigint,

// reference type (non premitive) => Array, Object, Functions

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id ==anotherId)

const heros = ["shaktiman","naagraj", "doga"]
 let myObj = {
    name : "bharat",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}
myFunction()

console.log(typeof myFunction)