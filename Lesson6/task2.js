function countDown(num){
    if(num === 0){
        console.log("The number is "+num+". Exiting...")
    }else{
        console.log("The number is "+num+".")
        countDown(num - 1)
    }
    
}

countDown(5)