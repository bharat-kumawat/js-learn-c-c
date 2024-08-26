
if(true){
 let a = 10
const b = 20
var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "bharat"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
// one()

// mini hoisting 
function addOne(num){
    return num + 1
}
addOne()

const addTwo = function(num){
   return num + 2
}
addTwo()