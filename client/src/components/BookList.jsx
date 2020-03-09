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
                         <BookDetails {...{ key:book.id,book }}/*book={book}*/ />
                        )
                    })
                }
            </ul>

            <BookForm/>
        </div>

    );
}

export default BookList;