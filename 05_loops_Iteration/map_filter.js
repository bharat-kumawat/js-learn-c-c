const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = array.filter( (num )=> num > 4)

// console.log(newArray);

const myNumber =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumber.map( (num) => num +10)
// 

//chaining 
// const newNums = myNumber.map( (num) => num * 10).map( (num) => num +1).filter((num)=> num >= 40)
// console.log(newNums);


//  REduce method

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc,curval) {
    return acc +curval
}, 0)
console.log(myTotal);
