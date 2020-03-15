import React, { useContext,useEffect } from 'react';
import { BookListContext } from '../contexts/BookListContextProvider'
import BookForm from './BookListTools/BookForm';
import BookDetails from './BookListTools/BookDetails';

const BookList = (props) => {

    const { bookList,dispatch } = useContext(BookListContext)

    
    //  bookList.sort(
    //      function(a,b){  
            
    //          return a.id>=b.id?-1:1
            
    //      }
    //  )
    useEffect(function(){

     setTimeout(function(){   dispatch({type:"getBookList"})},500)
    },[])


    return (

        <div className="book-list">
               <BookForm/>
            <ul >
                {
                    bookList.map(book => {
                        return (        
                         <BookDetails {...{ key:book.id,book }}/*book={book}*/ />
                        )
                    })
                }
            </ul>

         
        </div>

    );
}

export default BookList;