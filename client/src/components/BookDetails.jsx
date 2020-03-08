import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'

const BookDetails = ({ book }) => {


    const { dispatch } = useContext(BookContext)

 
    return (
        <div>
            <li key={book.id} >
            <button className="deleteBtn"

onClick={() => { dispatch({ type: "removeBook", id: book.id }) }}

onMouseEnter={(e) => { e.currentTarget.parentNode.parentNode.style="opacity:0.7;  text-decoration: line-through;" }}

onMouseOut={(e) => { e.currentTarget.parentNode.parentNode.style="opacity:1;  text-decoration: noe;" }}

>
delete
</button>
                <div className="title">{book.title}  </div>

                
              
                <div className="author">{book.author} </div>


            </li>

        </div>


    );
}

export default BookDetails;