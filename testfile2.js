const imported = require('./script');
//console.log(imported);
/* Ayyappa
30
12
Mul of :28
Division of :2
Sum of :38
{
  mul: [Function: mul],
  sum: [Function: sum],
  name: 'Manikanta',
  obj: { name: 'Harihara', get: 30, address: 'Shabarimala' } */

imported.sum(12, 8);
console.log(imported.name)