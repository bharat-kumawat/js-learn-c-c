function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("T");

}

//sayMyName()
// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
function addTwoNumber(number1, number2){
let result =number1 + number2
return result
}
const result=addTwoNumber(3,5)
//console.log(result)

function loginUserMessage(username="bharat"){
    if(username === undefined) // ===  if(!username)
    {
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("bharat"))
// console.log(loginUserMessage("ganpat"))

function calculateCartPrice(val,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500))
const user = {
    username: "bharat",
    price : 500
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
    username: "ganesh",
    price:1
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))