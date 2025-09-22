function Even(){
    console.log("The number is even.")
}

function Odd(){
    console.log("The number is odd.")
}

function handleNum(num, handleEven, handleOdd){
    console.log("The number is "+num+".")
    if (num === 0){
        console.log("The number is null.")
    }
    else if (num % 2 === 0){
        handleEven()
    }
    else{
        handleOdd()
    }
}

let number = Math.round(Math.random()*10)
handleNum(number, Even, Odd)
