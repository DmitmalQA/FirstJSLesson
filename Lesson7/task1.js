function generateArray(max){
    let array = []
    for (let i = 0; i < max; i++){
        if (i % 2 === 0){
            array[i] = Math.round(Math.random()*10)
        }  
        else {
            array[i] = Math.round(Math.random()*-10)
        }
    }
    return array        
}

function calculatePositives(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            sum = sum + 1
        }
    }
    return sum
}

function calculateNegatives(array){
    let sum = 0
    array.forEach((number) => {
        if (number < 0){
            sum = sum + 1
        }
    });
    return sum
}

function calculateZero(array){
    let sum = 0
    let zeros = array.filter((number) => number === 0)
    zeros.forEach((number) => {
        if (number === 0){
            sum = sum + 1
        }
    })
    return sum
}

let numbers = generateArray(10)

console.log("The numbers are: "+numbers)
console.log("Positive Numbers: " + calculatePositives(numbers))
console.log("Negative Numbers: " + calculateNegatives(numbers))
console.log("Zero Numbers: " + calculateZero(numbers))