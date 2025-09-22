function createCounter(){
    let count = 0
    return function (){
        console.log("Counter is "+`${count + 1}`+".")
        return count = count + 1
    }
}

let numberCounter = createCounter()
let secondCounter = createCounter()

for (let i = 0; i < 5; i++){
    numberCounter()
    if (i === 2){
        secondCounter()
    }
}