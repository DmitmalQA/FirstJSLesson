import { Gadget } from "./gadget.js"; //importing parental class Gadget from file gadget.js

//constants for the colour to easier see the properties in the console.
const red = '\x1b[31m'
const green = '\x1b[32m'
const reset = '\x1b[0m'
const blue = '\x1b[34m'
const yellow = '\x1b[33m'

//creating class Smartphone. This class is a child class of Gadget class and it can be imported into other files
export class Smartphone extends Gadget {

    //creating a constructor for class Gadget defining all primary properties of this class
    constructor(brand, model, year, operSys){

        //adding a verification for the operating system so that there can't be an object of this class with a non-existent operating system.
        const possibleSystems = [/iOS/i, /Android/i, /HarmonyOS/i]
        if(!possibleSystems.some(regex => regex.test(operSys))){
            throw new Error("Such operating system doesn't exist.")
        }
        super(brand, model, year)
        this._operatingSystem = operSys
    }

    set operatingSystem(system){
        const possibleSystems = [/iOS/i, /Android/i, /HarmonyOS/i]
        if(possibleSystems.some(regex => regex.test(system))){
            this._operatingSystem = system
            console.log("The new system for " + green +  `${this.brand} ` + reset + red + `${this.model}` + reset + " is now " + yellow + `${this._operatingSystem}` + reset)
        }
        else{
            console.log("Incorrect system of the gadget " + green +  `${this.brand} ` + reset + red + `${this.model}` + reset)
        }
    }

    get operatingSystem(){
        return this._operatingSystem
    }
    //creating a method to return all of the properties of the class in a single string.
    getInfo(){
        console.log(red + `${this.model}` + reset + " of " + green + `${this.brand}` + reset + " released in " + blue + `${this.year}.` + reset + " It has the following OS: " + yellow + `${this.operatingSystem}.` + reset)
    }

}