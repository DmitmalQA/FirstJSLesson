const { default: axios } = require("axios")
describe("Book site testing", () =>{

    test("Get token", async () => {
        let userData = {
            "userName" : "Dmitmal",
            "password" : "Test1Test2Test3!"
        }

        let receivedData = await axios.post("https://bookstore.toolsqa.com/Account/v1/GenerateToken", userData)

        console.log(receivedData)
    })

    test("Add books", async () => {
        let userData = {
            "userName" : "Dmitmal",
            "password" : "Test1Test2Test3!"
        }

        const tokenResponse = await axios.post("https://bookstore.toolsqa.com/Account/v1/GenerateToken", userData)
        const token = tokenResponse.data.token

        let addListOfBooks = {
            "userId": "86f78570-5061-4105-b0ac-98777940a530",
            "collectionOfIsbns": [
                {
                    "isbn" : "9781449331818"
                },
                {
                    "isbn" : "9781449337711"
                },
                {
                    "isbn" : "9781449365035"
                }
            ]
        }

        let addedBooks = await axios.post("https://bookstore.toolsqa.com/BookStore/v1/Books", addListOfBooks, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        let result = addedBooks.data

        console.log(result)
    })

    test("Info about the book", async () => {
        
        let isbn = "9781449337711"

        let fetchedBook = await axios.get(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn}`)

        console.log(fetchedBook.data)
    })

    test("Remove books", async () => {
        let userData = {
            "userName" : "Dmitmal",
            "password" : "Test1Test2Test3!"
        }

        const tokenResponse = await axios.post("https://bookstore.toolsqa.com/Account/v1/GenerateToken", userData)
        const token = tokenResponse.data.token

        const stringObject = {
            "isbn" : "9781449337711",
            "userId": "86f78570-5061-4105-b0ac-98777940a530"
        }

        const deletedBooks = await axios.delete("https://bookstore.toolsqa.com/BookStore/v1/Book", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: stringObject
        })
        let result = deletedBooks.data

        console.log(result)
    })
})