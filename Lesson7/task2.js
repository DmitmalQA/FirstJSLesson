function generateArray(max){
    let array = []
    for (let i = 0; i < max; i++){
        array[i] = Math.round(Math.random()*10)
    }
    return array        
}

let numbers = generateArray(10)

let sum = numbers.reduce((total, number) => total + number, 0)

console.log("The initial numbers are: " + numbers)
console.log("Their sum is: " + sum)