import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider';





const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const { dispatch } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({type:"addBook",book:{title,author,id:Date.now()}})
       // addBook(title, author)
        
        
        setTitle("")
        setAuthor("")
    }


    return (


        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => { setTitle(e.currentTarget.value) }} required></input>
            <input type="text" value={author} onChange={(e) => { setAuthor(e.currentTarget.value) }} required></input>
            <input type="submit" value="Add Book"/>
        </form>

    );
}

export default BookForm;