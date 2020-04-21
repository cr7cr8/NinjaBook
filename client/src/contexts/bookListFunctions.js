
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
            title: <React.Fragment>Please <Link to="/login" style={{ color: "#eee" }} > Login </Link> or <Link to="/register" style={{ color: "#eee" }}> Regist </Link>  to use</React.Fragment>,
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

                    console.log(book)
                    return { title: book.title, author: book.author, id: book.id, finish: book.finish, files: book.files, picture: book.picture }
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

    else if (type === "uploadBoth") {



        const data = new FormData()
        paramObj.pic.forEach(picture => {
            data.append('file', picture);
        })
        data.append('obj', JSON.stringify(paramObj.book));

        const p1 = axios.post(`${url}/booklist/uploadpic`, data, {
            headers: { 'content-type': 'multipart/form-data' },


            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                paramObj.setPicProgress((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")

                if (((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%") === "100.00%") {
                    paramObj.setPicProgress("Processing on server")
                    paramObj.setPic(null);
                }
                console.log(percentCompleted)
            },
        })
            .then(
                (response) => {
                  //  setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))
                    paramObj.setPicProgress("Picture")
                }
            )
            .catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })


        const data2 = new FormData()
        data2.append('file', paramObj.file);
        data2.append('obj', JSON.stringify(paramObj.book));
        const p2=  axios.post(`${url}/booklist/upload`, data2, {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                paramObj.setFileProgress((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")

                if (((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%") === "100.00%") {
                    paramObj.setFileProgress("Processing on server")
                    paramObj.setFile(null);
                }
                console.log(percentCompleted)
            },
        })
            .then(
                (response) => {

                 //   setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))
                    paramObj.setFileProgress("File")
                }
            )
            .catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })

            Promise.all([p1,p2]).then(()=>{

                setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))

            }).catch(err=>{console.log(err)
                alert(err)
            })


    }
    else if (type === "uploadPic") {


        console.log(paramObj.pic)
        const data = new FormData()
        paramObj.pic.forEach(picture => {
            data.append('file', picture);
        })
        data.append('obj', JSON.stringify(paramObj.book));

        return axios.post(`${url}/booklist/uploadpic`, data, {
            headers: { 'content-type': 'multipart/form-data' },


            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                paramObj.setPicProgress((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")

                if (((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%") === "100.00%") {
                    paramObj.setPicProgress("Processing on server")
                    paramObj.setPic(null);
                }
                console.log(percentCompleted)
            },
        })
            .then(
                (response) => {
                    setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))
                    paramObj.setPicProgress("Picture")
                }
            )
            .catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })
    }
    else if (type === "uploadFile") {

        const data = new FormData()
        if (paramObj.file) {
            data.append('file', paramObj.file);
        }
        data.append('obj', JSON.stringify(paramObj.book));

        return axios.post(`${url}/booklist/upload`, data, {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: progressEvent => {
                let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                paramObj.setFileProgress((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%")

                if (((progressEvent.loaded * 100 / progressEvent.total).toFixed(2) + "%") === "100.00%") {
                    paramObj.setFileProgress("Processing on server")
                    paramObj.setFile(null);
                }
                console.log(percentCompleted)
            },
        })
            .then(
                (response) => {

                    setState([...bookList, paramObj.book].sort((a, b) => a.id >= b.id ? -1 : 1))
                    paramObj.setFileProgress("File")

                    // console.log(response.data)
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

    else if (type === "downloadPic") {

        console.log(paramObj.id)

        return axios({
            url: `${url}/booklist/downloadpic/${String(paramObj.id)}`,
            method: 'GET',
            responseType: 'arraybuffer', // important

        })
            .then((response) => {

                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        '',
                    ),
                );
                paramObj.setPicture("data:"+response.headers["content-type"]+";base64," + base64)
                //     const url = window.URL.createObjectURL(new Blob([response.data]));
                //     const link = document.createElement('a');
                //     link.href = url;
                //     link.setAttribute('download', decodeURIComponent(response.headers["file-name"]));
                //     document.body.appendChild(link);
                //     link.click();
            }).catch(err => {
                //     console.log(err.response.data)
                //     alert(err.response.data)
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

