
import jwtDecode from "jwt-decode";
import axios from "axios";
import url from "../config";
import React, { useContext, useEffect } from 'react';
import FileDownload from 'js-file-download';
import { Link } from 'react-router-dom';


if (getToken()) { axios.defaults.headers.common['x-auth-token'] = getToken() }


export const initialState = initialize()



function initialize() {
    if (getToken()) {


        return [{ title: "... loading ...", author: Date(), id: Date.now() }]
    }
    else {

        return [{
            title: <React.Fragment>Please <Link to="/login" style={{color:"#eee"}} > Login </Link> or <Link to="/register" style={{color:"#eee"}}> Regist </Link>  to use</React.Fragment>,
            author: Date(), id: Date.now()
        }]
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

            if (book.id !== paramObj.id) {

                return book;
            }
        })

        return axios.delete(`${url}/booklist/deletebook/` + paramObj.id)
            .then(response => {
                setTimeout(function () { setState(arr) }, 500)
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
    else if (type === "cleanFinish") {

        setState(bookList.filter(book => book.finish !== true))

    }
    else if (type === "getBookList") {
        return axios.get(paramObj.justUnfished ? `${url}/booklist/getunfinishedbooklist` : `${url}/booklist/getbooklist`)
            .then(list => {



                const arr = list.data.map((book) => {

                    // console.log(book)
                    return { title: book.title, author: book.author, id: book.id, finish: book.finish, files: book.files }
                })
                setState(arr)



                //   console.log(arr)

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

    else if (type === "uploadFile") {

        setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))

        const data = new FormData()
        if (paramObj.file) {
            data.append('file', paramObj.file);
        }
        data.append('obj', JSON.stringify(paramObj.book));

        return axios.post(`${url}/booklist/upload`, data, {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                paramObj.setProgress((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")
                console.log(percentCompleted)
            },

        })
            .then(
                (response) => {
           
                    paramObj.setProgress("File")
                    paramObj.setFile(null);
                    console.log(response.data)
                    //   alert(response.data)
                }
            )
            .catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })
    }

    else if (type === "downloadFile") {



        return axios({
            url: `${url}/booklist/download/${String(paramObj.id)}`,
            method: 'GET',
            responseType: 'blob', // important
            onDownloadProgress: progressEvent => {



                //    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                //      console.log(percentCompleted)
                paramObj.obj((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")
                console.log((progressEvent.loaded * 100 / progressEvent.total).toFixed(2))

            }
        })
            .then((response) => {


                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', decodeURIComponent(response.headers["file-name"]));
                document.body.appendChild(link);
                link.click();
            })
            .catch(err => {
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

