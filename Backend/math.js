// const sum = (a, b) =>a + b;
// const mul = (a, b) =>a * b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum : sum,
//     mul : mul,
//     g : g,
//     PI : PI,
// };

// module.exports = 123; 
// module.exports = obj; //module.export se export kr diya

//OR WE CAN ALSO WRITE IT AS

module.exports.sum = (a, b) =>a + b;
module.exports.mul = (a, b) =>a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;