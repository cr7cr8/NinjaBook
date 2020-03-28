import React, { useState, useContext } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';




const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)

    const [textRows, setTextRows] = useState(2)


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
                <textarea placeholder="title" type="text" value={title}
                    rows={textRows}
                    style={{
                        fontSize: "1.5em",


                    }}

                    onChange={
                        (e) => {
                         //   e.currentTarget.height = "5px";
                            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px"


                            const lines = title.split('\n');

                            if (!lines[lines.length - 1]) {
                           
                                e.currentTarget.style.height ="5px"
                                //   setTextRows(textRows-1)
                            }
                            console.log(!!lines[lines.length - 1])

                            setTitle(e.currentTarget.value)

                        }}
                    onKeyPress={
                        (e) => {

                        }
                    }

                    required>

                </textarea>
                <input placeholder="author" type="text" value={author} onChange={(e) => { setAuthor(e.currentTarget.value) }} ></input>

                <input type="submit" value="Add Book" />



            </form>
            }
        </React.Fragment>
    );
}

export default BookForm;