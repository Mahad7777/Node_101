// function performOperation(a,b,next){
//     return next(a,b)
// }

// function add(x, y) {
//     return x + y;
//     }
//     function subtract(x, y) {
//     return x - y;
//     }
//     function multiply(x, y) {
//     return x * y;
//     }
//     function divide(x, y) {
//     return x / y;
//     }

// console.log(performOperation(1,2,add))


const fs = require("fs")
fs.readFile('random.js', 'utf-8', (err,data)=>{
    if (err){
        console.log(err)
        return 
    }
    console.log(data)
})