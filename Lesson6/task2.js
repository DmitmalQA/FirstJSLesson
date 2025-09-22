function countDown(num){
    do{
        console.log("The number is "+num+".")
        num = num - 1
        if(num === 0){
            console.log("The number is already "+num+". Exiting...")
        }
    }while(num > 0)
}

countDown(5)