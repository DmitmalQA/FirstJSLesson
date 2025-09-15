function generatePassword(length){
    let password = ""
    let charLib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charIndex = 0
    for (let i = 0; i < length; i++){
        charIndex = Math.floor(Math.random()*63)
        password = password + charLib.charAt(charIndex)
    }
    return password
}

let newPassword = generatePassword(8)
console.log("The new password is "+newPassword)