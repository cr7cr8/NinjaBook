import React, { useState, useContext } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';




const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()



        dispatch({ type: "addBook", book: { title, author: author || Date().substr(0, 24), id: Date.now() } })





        setTitle("")
        setAuthor("")
    }

    //{!user.username &&<button>  <Link to="/login" >login  </Link></button>}
    return (

        <React.Fragment>

            {user.username && <form onSubmit={handleSubmit}>
                <input placeholder="title" type="text" value={title} onChange={(e) => { setTitle(e.currentTarget.value) }} required></input>
                <input placeholder="author" type="text" value={author} onChange={(e) => { setAuthor(e.currentTarget.value) }} ></input>

                <input type="submit" value="Add Book" />
            </form>
            }
        </React.Fragment>
    );
}

export default BookForm;