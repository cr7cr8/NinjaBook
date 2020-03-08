import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'

const BookDetails = ({ book }) => {


    const { dispatch } = useContext(BookContext)
    return (
        <div>
            <li key={book.id} onClick={() => {

                dispatch({type:"removeBook", id: book.id  })
            
            }}>

                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
            </li>

        </div>


    );
}

export default BookDetails;