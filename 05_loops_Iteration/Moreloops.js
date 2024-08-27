
//for of
// [ "", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// Maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "UNITED STATE OF AMERICA")
// map.set('FR', "FRANCE")
// map.set('IN', "India") //Unique value ke liye hota hai

// console.log(map);

// for (const [key,value] of map) {
//     // console.log(key, ':-', value);
    
// }

const myObject = {
    js: "javasccript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key);
//    console.log(myObject[key]);
   
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);
   
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "India") 

// for (const key in map) {
//     console.log(key);
    
// }      NOT WORK BECAUSE MAP IS NOT ITERABLE
