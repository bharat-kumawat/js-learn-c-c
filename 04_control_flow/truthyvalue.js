const userEmail = "bh@dkk.ai"
// if(userEmail){
//     console.log("Got user email");
    
// }else {
//     console.log("dont have user email");
    
// }
//falsy value  => false,0, -0, Bigint 0n, "", null, undefined, NaN
// Truthy Value => "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=100 ? console.log("less than 80 ") : console.log("more than 80");



