let calculator = {
    lastResult: null,
    operationsCount: 0,

    add(a, b){
        let sum = a + b
        this.lastResult = sum
        this.operationsCount++
        console.log(a+" + "+b+" = "+sum)
        calculator.showStats()
    },

    subtract(a, b){
        let sub = a - b
        this.lastResult = sub
        this.operationsCount++
        console.log(a+" - "+b+" = "+sub)
        calculator.showStats()
    },
    
    multiply(a, b){
        let multi = a * b
        this.lastResult = multi
        this.operationsCount++
        console.log(a+" * "+b+" = "+multi)
        calculator.showStats()
    },

    divide(a, b){
        let div
        if (b === 0){
            console.log("The division is impossible.")
        }
        else{
            div = a / b
            this.lastResult = div
            this.operationsCount++
            console.log(a+" / "+b+" = "+div)
            calculator.showStats()
        }
    },

    reset(){
        this.lastResult = null
        this.operationsCount = 0
        console.log("The calculator has been reset.")
        calculator.showStats()
    },

    showStats(){
        console.log("The last result is: "+this.lastResult)
        console.log("Total operations count is: "+this.operationsCount)
    },
}

calculator.add(Math.round(Math.random()*10), Math.round(Math.random()*10))
calculator.subtract(Math.round(Math.random()*10), Math.round(Math.random()*10))
calculator.multiply(Math.round(Math.random()*10), Math.round(Math.random()*10))
calculator.divide(Math.round(Math.random()*10), Math.round(Math.random()*10))
//calculator.divide(Math.round(Math.random()*10), 0)
calculator.reset()