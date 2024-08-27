const isUserLoggedIn = true

// if(2 == "2"){
// console.log("executed");

// }
const balance = 500
// if(balance > 300) console.log("test"),console.log("test2") // nhi karna hai 

// if(balance < 500){
//     console.log("less than 600");
    
// }
// else if(balance < 750){
//     console.log("less than 750")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user Logged in")
}

