//constants for the colour to easier see the properties in the console.
const red = '\x1b[31m'
const green = '\x1b[32m'
const reset = '\x1b[0m'
const blue = '\x1b[34m'
const yellow = '\x1b[33m'

//creating a function to fetch post's data.
function fetchPost(postId){
    return fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

//creating a function to fetch post's comments.
function fetchComments(postId){
    return fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
}

//calling to fetch the post's data for the post with id=1.
fetchPost(1).then(response => response.json()) //aggregating a json response.
    .then(console.log(blue + "First Post\n" + reset))
    .then(post => console.log(post)); //viewing the aggregated json.

//setting a timeout for the next operation for proper console preview.
setTimeout(() => {
    //calling to fetch the post's comments from the post with id=1.
    fetchComments(1).then(response => response.json())
    .then(console.log(red + "\nComments for the first post\n" + reset))
    .then(post => console.log(post))
}, 2000)