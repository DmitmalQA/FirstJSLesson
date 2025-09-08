function AgeGeneration(){
    let age = Math.round(Math.random()*100,2)
    const max = 30
    const min = 10

    while (age > max || age < min){
        age = Math.round(Math.random()*100,2)
    }

    return (age)
}

function AgeVerification(setAge){
    let isAdult

    if (setAge >= 18){
        isAdult = true
        console.log("This person is an adult. isAdult is "+isAdult)
    }
    else{
        isAdult = false
        console.log("This person is not an adult. isAdult is "+isAdult)
    }
}

let age = AgeGeneration()
console.log("The person's age is "+age+"\n")
console.log("Let's check if person is an adult.\n")
AgeVerification(age)