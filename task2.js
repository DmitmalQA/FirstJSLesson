let hour = Math.floor(Math.random()*24)

console.log("The current hour is: "+hour+".")

if (hour >= 0 && hour <= 5){
    console.log("Good night!")
}
else if (hour > 5 && hour <= 11){
    console.log("Good morning!")
}
else if (hour > 11 && hour <= 17){
    console.log("Good day!")
}
else if (hour > 17 && hour <= 23){
    console.log("Good evening!")
}