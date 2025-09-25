function generateArray(max){
    let array = []
    for (let i = 0; i < max; i++){
        array[i] = Math.round(Math.random()*10 + 1)
    }
    return array        
}

function filterEvens(array){
    let evens = array.filter((number) => number % 2 === 0)
    return evens
}

let numbers = generateArray(15)
let evenNumbers = filterEvens(numbers)

console.log("The initial numbers are: "+numbers)
console.log("The evens are: "+evenNumbers)