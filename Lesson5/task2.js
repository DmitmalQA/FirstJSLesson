function checkOrder(available, ordered){
    console.log("The amount of ordered items is "+ordered+". The available amount is "+available+".")
    if (ordered > available){
        console.log("Your order is too large, we don’t have enough goods")
    }
    else if(ordered === 0){
        console.log("Your order is empty")
    }
    else if(available === 0){
        console.log("Out of stock. Sorry for the inconvenience.")
    }
    else if(available < 0 || ordered < 0){
        console.log("Error. Please check the database.")
    }
    else{
        console.log("Your order is accepted")
    }
}

let basket = Math.floor(Math.random()*10)
let storage = Math.floor(Math.random()*10)

let orderStatus = checkOrder(storage, basket)