import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'
import BookForm from './BookForm';
import BookDetails from './BookDetails';

const BookList = (props) => {

    const { books } = useContext(BookContext)

    return (

        <div className="book-list">
            <ul >
                {
                    books.map(book => {
                        return (     
                            //  <li key={book.id}>{book.title}</li>
                             <React.Fragment key={book.id}><BookDetails book={book} /></React.Fragment>
                             )
                    })
                }
            </ul>
      
      <BookForm></BookForm>
        </div>

    );
}

export default BookList;