let a = "Ayyappa"
console.warn(a);

let b = 10;
let c = 20;
let name = "Manikanta";
console.log(b+c);

 function test(x,y) {
    console.log(x + y);
}
function sum(a, b) {
    console.log("Sum of :")
    console.log(a+b)
}
function mul(a, b) {
    console.log("Mul of :"+a * b);
}

function division(a, b) {
    console.log("Division of :"+a/b)
}
/* test(3, 9);
mul(4, 7);
division(4,2)
sum(3, 8); */

let obj = {
    name: "Harihara",
    get: 30,
    address:"Shabarimala"
}

// we can use these functions into another file with export module function 
module.exports = {
    mul,sum,name,obj
}
//////////////////////////////////

