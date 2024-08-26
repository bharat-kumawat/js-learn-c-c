// const tinderUSe = new Object()
const tinderUSe = {}
tinderUSe.id = "123453"
tinderUSe.name = "sammay"
tinderUSe.isLoggedIn = false

// console.log(tinderUSe)
const regularUser = {
    email: "some@gmail.com",
    fullname:{
    userFullname: {
        firstname: "bharat",
        lastname: "kumawat"
    }
    }
}
  
// console.log(regularUser.fullname.userFullname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3= Object.assign({}, obj1,obj2, obj4)

const obj3 = {...obj1, ...obj2,...obj4}
//console.log(obj3)

const user= [
    {

    },
{

},
{

},
{

},{

},
]
user[1].email
//console.log(tinderUSe)

// console.log(Object.keys(tinderUSe))
// console.log(Object.values(tinderUSe))
// console.log(Object.entries(tinderUSe))

// console.log(tinderUSe.hasOwnProperty('isLoggedIn'))

//DESTRUCTURING OF THE OBJECT IN THIS COURSE

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"

}

const {courseInstructor:instructor} = course

console.log(instructor)

// API
// {
//     "name" : "bharat",
//     "subject" : "Javascript",
// }