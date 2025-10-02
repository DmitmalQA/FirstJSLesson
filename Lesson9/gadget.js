//constants for the colour to easier see the properties in the console.
const red = '\x1b[31m' //red colour is for the model type
const green = '\x1b[32m' //green colour is for the brand type
const reset = '\x1b[0m' //this is to reset the colouring
const blue = '\x1b[34m' //blue colour is for the year of the gadget

//creating class Gadget which can be imported into other files
export class Gadget {
    
    //creating a constructor for class Gadget defining all primary properties of this class
    constructor(brand, model, year){ 
        const currentYear = new Date().getFullYear()
        //adding a verification for a reasonable year to be entered upon creating an instance of an object.
        if (year < 2000 || year > currentYear){
            throw new Error("Invalid year specified.")
        }
        this.brand = brand
        this.model = model
        this._year = year
    }

    //creating a setter that will check if the property is about to be changed from the inital to the allowed range of year.
    set year(value){
        const currentYear = new Date().getFullYear()
        if (value >= 2000 && value <= currentYear){
            this._year = value
            console.log("The new year for " + green +  `${this.brand} ` + reset + red + `${this.model}` + reset + " is now " + blue + `${this._year}` + reset)
        }
        else{
            console.log("Incorrect year of the gadget " + green +  `${this.brand} ` + reset + red + `${this.model} ` + reset)
        }

    }

    //returning the year value
    get year(){
        return this._year
    }

    //creating a method to return all of the properties of the class in a single string.
    getInfo(){ 
        console.log(red + `${this.model}` + reset + " of " + green + `${this.brand}` + reset + " released in " + blue + `${this.year}.` + reset)
    }

    //static function to determine the earliest object from the array of objects and return the new object back
    static getOldestGadget(gadgetArray){
        let earliestYear = 2025
        let earliestModel = ''
        let earliestBrand = ''
        gadgetArray.forEach(element => {
            if (element._year < earliestYear){
                earliestYear = element._year
                earliestModel = element.model
                earliestBrand = element.brand
            }
        });
        let oldestGadget = new Gadget(earliestBrand, earliestModel, earliestYear)
        return oldestGadget
    }
}