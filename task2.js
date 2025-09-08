let age = Math.round(Math.random()*100,2)
const max = 30
const min = 10

while (age > max || age < min){
    age = Math.round(Math.random()*100,2)
}

console.log("The person's age is "+age)

let isAdult = age >= 18

if(isAdult){
    console.log("This person is an adult. isAdult is "+isAdult)
}
else{
    console.log("This person is not an adult. isAdult is "+isAdult)
}