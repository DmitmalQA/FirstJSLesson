import { Gadget } from "./gadget.js"; //importing class Gadget from file gadget.js
import { Smartphone } from "./smartphone.js"; //importing class Smartphone from file smartphone.js

console.log("----------------------------------------------------------------------------------------------------")

//task 1 

console.log("This is task 1.")
console.log("----------------------------------------------------------------------------------------------------")

let iPhone_16 = new Smartphone("Apple", "iPhone 16", 2025, "iOS 18") //creating an instance of class Smartphone
iPhone_16.getInfo() //Getting information via method of the class Smartphone
let watch = new Gadget("Apple", "Apple Watch", 2005) //creating an instance of class Gadget
watch.getInfo() //Getting information via the same method but of the class Gadget, which leads to a different outcome (Polymorphism)

console.log("----------------------------------------------------------------------------------------------------")

//task 2

console.log("This is task 2.")
console.log("----------------------------------------------------------------------------------------------------")

let phoneTask2 = new Smartphone("Apple", "iPhone 2", 2012, "iOS 3") //creating a fully valid instance of the object of class Smartphone
let deviceTask2 = new Gadget("Samsung", "Watch 2", 2003) //creating a fully valid instance of the object of class Gadget

//The following object creation instances are meant to throw errors upon creation. Please comment them out or uncomment to test the error return for the incorrect year or operating system.

//let incorrectPhoneSystem = new Smartphone("Apple", "iPhone 2", 2012, "Test 3") //incorrect operating system for the object of class Smartphone
//let incorrectDeviceYear = new Gadget("Samsung", "Watch 2", 1859) //incorrect year for the object of class Gadget
//let incorrectPhoneYear = new Smartphone("Apple", "iPhone 2", 1724, "Test 3") //incorrect year for the object of class Smartphone

deviceTask2.year = 1788 //attempting to record a year that wouldn't satify the setter's requirements. It should return the error specifying for which device the year is wrong.
deviceTask2.year = 2010 //attempting to record a year that would satify the setter's requirements. It should return the message that the year was properly updated for the device in question.
phoneTask2.year = 1000 //attempting to record a year that wouldn't satify the setter's requirements but in a child's class. It should return the error specifying for which device the year is wrong.
phoneTask2.operatingSystem = "Test" //attempting to record a system that wouldn't satify the setter's requirements for the child's class. It should return the error specifying for which device the system is wrong.
phoneTask2.operatingSystem = "Android 23" //attempting to record a system that would satify the setter's requirements for the child's class. It should return the message that the system was properly updated for the device in question.
deviceTask2.getInfo() //checking if everything was recorded correctly in the summary info method
phoneTask2.getInfo() //checking if everything was recorded correctly in the summary info method

console.log("----------------------------------------------------------------------------------------------------")

//task 3

console.log("This is task 3.")
console.log("----------------------------------------------------------------------------------------------------")

//creating multiple objects to work with
let phoneTask31 = new Smartphone("Apple", "iPhone 3", 2021, "iOS 1")
let phoneTask32 = new Smartphone("Samsung", "Galaxy 21", 2012, "iOS 5")
let phoneTask33 = new Smartphone("Nokia", "Model 13", 2025, "iOS 13")
let deviceTask31 = new Gadget("Samsung", "Watch 3", 2003)
let deviceTask32 = new Gadget("Digital", "Tablet 23", 2013)
let deviceTask33 = new Gadget("Apple", "iPad 1204", 2018)

//uniting all of the devices into an array
let listOfDevices = [phoneTask31, phoneTask32, phoneTask33, deviceTask31, deviceTask32, deviceTask33]
console.log("The list of devices\n")
//showing the information about every device in the array.
listOfDevices.forEach(element => {
    element.getInfo()
});
console.log("\nThe oldest device is\n")
//returning the oldest device from the initial array.
let oldestGadget = Gadget.getOldestGadget(listOfDevices)
oldestGadget.getInfo()