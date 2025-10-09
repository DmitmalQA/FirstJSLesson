const { default: axios } = require("axios")

describe("The Lesson 11 tests.", () => {
    
    test ("GET test.", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        const post = response.data

        //console.log(post)

        expect(response.status).toBe(200)

        //option 1 - vague check.

        /*expect(post.userId).toBeDefined()
        expect(post.id).toBeDefined()
        expect(post.body).toBeDefined()
        expect(post.title).toBeDefined()*/
        
        //option 2 - value check.

        expect(post.id).toBe(1)
        expect(post.body).toBe('quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto')
        expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    test ("POST test.", async () => {
        const post = {
            title : 'foo',
            body : 'test body'
        }

        const response = await axios.post("https://jsonplaceholder.typicode.com/posts/", post)


        //console.log(response)

        expect(response.status).toBe(201)
        expect(response.data.id).toBeDefined()
    })

    test ("PUT test.", async () => {
        const post = {
            title : 'foo',
            body : 'test body'
        }

        const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", post)
        const updatedPost = response.data

        expect(response.status).toBe(200)
        expect(updatedPost.title).toBe('foo')
        expect(updatedPost.body).toBe('test body')
    })

        test ("DELETE test.", async () => {

        const responseDelete = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")

        expect(responseDelete.status).toBe(200)
    })
})