import React, { useState, useContext, createRef, useLayoutEffect } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';

import TextareaAutosize from 'react-textarea-autosize';


const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)


    let myRef ;
    let textareaRef = createRef()

    const handleSubmit = (e) => {
        e.preventDefault()



        dispatch({ type: "addBook", book: { title, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })





        setTitle("")
        setAuthor("")
    }

    //{!user.username &&<button>  <Link to="/login" >login  </Link></button>}
    return (

        <React.Fragment>

            {user.username && <form onSubmit={handleSubmit}>

                <TextareaAutosize value={title}

                    placeholder="title"
                    onChange={
                        (e) => {
                            setTitle(e.currentTarget.value)
                        }}

                    ref={tag => (textareaRef = tag)}
                    required
                ></TextareaAutosize>
                <input placeholder="author" type="text" value={author} onChange={(e) => { setAuthor(e.currentTarget.value) }} ></input>


                <input type="submit" value="Add Book" />

            </form>
            }

            <input type="file" ref={fileInput => (myRef = fileInput)}></input>
            <button onClick={() => { /*console.log(textareaRef.props.value);*/myRef.click() }}>pick file</button>
        </React.Fragment>
    );
}

export default BookForm;