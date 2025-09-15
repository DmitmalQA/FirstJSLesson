function area (width, height){
    rectangleArea = width*height
    return rectangleArea
}

let generatedWidth = Math.round(Math.random()*50)
let generatedHeight = Math.round(Math.random()*50)

console.log("The generated parameters of a rectangle are: width = "+generatedWidth+"; height = "+generatedHeight+".")

let generatedArea = area(generatedWidth, generatedHeight)

console.log("The resulting area is "+generatedArea+". This is Function Declaration Output")

let generatedAreaExpression = function newArea(width, height){
    rectangleArea = width*height
    return rectangleArea
}

console.log("With Function Expression the area is "+generatedAreaExpression(generatedWidth,generatedHeight))

let generatedAreaArrowFunction = (width, height) => {
    rectangleArea = width*height
    return rectangleArea
}

console.log("With Arrow Function the area is "+generatedAreaArrowFunction(generatedWidth,generatedHeight))