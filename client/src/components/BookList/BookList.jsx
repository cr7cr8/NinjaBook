import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContextProvider'
import BookForm from './_BookList/BookForm';
import BookDetails from './_BookList/BookDetails';

const BookList = (props) => {

    const { books } = useContext(BookContext)

    books.sort(
        function(a,b){
            if(a.id>=b.id){
                return -1
            }
            else{
                return 1
            }

        }
    )
    


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