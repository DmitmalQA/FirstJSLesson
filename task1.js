let a = Math.round(Math.random()*10,2)
let b = Math.round(Math.random()*10,2)
let c = Math.round(Math.random()*10,2)
let sum = a + b
let subtraction = b - c
let multiplication = a * c 
let division = b / a
let remainder = c % b
let power = Math.pow(a, b)

console.log("A is "+a+", B is "+b+", C is "+c+".")
console.log("The sum of A and B is: "+sum+". The subtraction of C from B is: "+subtraction+".\nThe multiplication of A and C is: "+multiplication+". The division of B by A is: "+division+".\nThe remainder of division of C by B is: "+remainder+". The A to the power of B is: "+power+".")