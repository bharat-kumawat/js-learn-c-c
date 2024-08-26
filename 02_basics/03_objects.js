// singleton

//object literals
const mySym = Symbol("key1")
const JsUSer = {
    name : "Hitesh",
    "full Name": "Bharat Kumawat",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "bharat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUSer.email)
// console.log(JsUSer["full Name"])
// console.log( JsUSer[mySym])

// JsUSer.email = "bkchatgpt.com"
// console.log(JsUSer.email)
// //Object.freeze(JsUSer)
// JsUSer.email = "bkijdmicrosoft.com"
// console.log(JsUSer)

JsUSer.greeting = function(){
    console.log(`Hello /js user ${this.name}`)
}

console.log(JsUSer.greeting())
console.log(JsUSer.greeting)

