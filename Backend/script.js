// let n = 5;

// for(let i=0; i<n ; i++){
//     console.log("hello " , i);
// }

// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("hello to : ", args[i]);

// }


const math = require("./math");  //require keyword is used so that we can access other files

console.log(math);
console.log(math.sum(2,3));

console.log(math.PI);