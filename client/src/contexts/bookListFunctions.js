
import jwtDecode from "jwt-decode";
import axios from "axios";
import url from "../config";

if (getToken()) { axios.defaults.headers.common['x-auth-token'] = getToken() }

export const initialState = initialize()



function initialize() {
    if (getToken()) {


        return [{ title: "loading ....", author: Date(), id: Date.now() }]
    }
    else {

        return [{ title: "Please login to use", author: Date(), id: Date.now() }]
    }
}






export const bookListFunctions = (bookList, setState, { type = "", ...paramObj }) => {

    if (type === "initialize") {

    }
    else if (type === "toggleStatus") {

        let book = bookList.find(book => book.id === paramObj.id)
        book.finish = !book.finish

        setState([...bookList])
        console.log(bookList.find(book => book.id === paramObj.id))

        return axios.put(`${url}/booklist/updatebook/` + paramObj.id, book)
            .then(response => {
               // console.log(response.data)
            
            })
            .catch(err => {
                
                let book = bookList.find(book => book.id === paramObj.id)
                book.finish = !book.finish
                setState([...bookList])
                
                console.log(err.response.data)
                alert(err.response.data)
            })

    }
    else if (!getToken()) {
        console.log("no tokens to perferm booklist functions")
    }

    else if (type === "deleteBook") {

    
        const arr = bookList.filter(book => {
            
            if( book.id !== paramObj.id){
              
                return book;
            }
        })

        setState(arr)

        return axios.delete(`${url}/booklist/deletebook/` + paramObj.id)
            .then(response => {
          
            })
            .catch(err => {

                setState([...bookList])

                console.log(err.response)
                alert(err.response.data)
            })

    }
    else if (type === "logout") {
        //  alert("aaa")

        setState([])
    }
    else if (type === "getBookList") {
        return axios.get(`${url}/booklist/getbooklist`)
            .then(list => {

                const arr = list.data.map((book) => {
                    return { title: book.title, author: book.author, id: book.id,finish:book.finish }
                })
                //   console.log(arr)
                setState(arr)
            })
            .catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })

    }
    else if (type === "addBook") {

        setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))

        return axios.post(`${url}/booklist/addbook`, paramObj.book)
            .then(
                (response) => {
                  

                }
            )
            .catch(err => {

                setState(bookList)
                console.log(err.response.data)
                alert(err.response.data)
            })
    }

    else {
        return bookList
    }
}

function setToken(token) {
    localStorage.setItem("token", token)
}

function getToken() {

    return localStorage.getItem("token")
}
function getDecodedToken() {

    const token = localStorage.getItem("token")

    return Boolean(token) ? jwtDecode(token) : null
}

function deleteToken() {
    return localStorage.removeItem("token")
}

