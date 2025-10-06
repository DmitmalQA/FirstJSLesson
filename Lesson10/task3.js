//constants for the colour to easier see the properties in the console.
const red = '\x1b[31m'
const green = '\x1b[32m'
const reset = '\x1b[0m'
const blue = '\x1b[34m'
const yellow = '\x1b[33m'

//creating a function to pull both post and its comments by id. To preserve the logic both post and its comments will share the id passed into functions, because it doesn't make sense to pull one post and comments from a different one.
async function getPostandComments(postId){
    let responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json())
    let responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(response => response.json())
    console.log(red + "This is a post.\n" + reset)
    setTimeout(() => {
        console.log(responsePost)
    }, 1000)
    setTimeout(() => {
        console.log(blue + "\nThis is comments to the post above.\n" + reset)
    }, 2000)
    setTimeout(() => {
        console.log(responseComments)
    }, 3000)
}

getPostandComments(1)