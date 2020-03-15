
import jwtDecode from "jwt-decode";
import axios from "axios";
import url from "../../config";

if (getToken()) { axios.defaults.headers.common['x-auth-token'] = getToken() }

export const initialState = initialize()



function initialize() {
    if (getToken()) {


        return []
    }
    else {

        return [{ title: "Please login to use", author: Date(), id: Date.now() }]
    }
}






export const bookListFunctions = (bookList, setState, { type = "", ...paramObj }) => {

    if (type === "initialize") {

    }
    else if (!getToken()){
        console.log("no tokens to perferm booklist functions")
    }

    else if (type === "deleteBook") {

        return axios.delete(`${url}/booklist/deletebook/` + paramObj.id)
            .then(response => {

                const arr = bookList.filter(book => book.id !== paramObj.id)

                setState(arr)
            })
            .catch(err=>{

                console.log(err.response.data)
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
                    return { title: book.title, author: book.author, id: book.id }
                })
                //   console.log(arr)
                setState(arr)
            })
            .catch(err=>{
                console.log(err.response.data)
                alert(err.response.data)
            })

    }
    else if (type === "addBook") {

        return axios.post(`${url}/booklist/addbook`, paramObj.book)
            .then(
                (response) => {
                    setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))

                }
            )
            .catch(err=>{
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

