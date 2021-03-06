import React, { useContext, useEffect } from 'react';
import { BookListContext } from '../contexts/BookListContextProvider'
import BookForm from './BookListTools/BookForm';
import BookDetails from './BookListTools/BookDetails';
import { UserContext } from '../contexts/UserContextProvider';


const BookList = (props) => {

    const { bookList, dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)

    //  bookList.sort(
    //      function(a,b){  

    //          return a.id>=b.id?-1:1

    //      }
    //  )
    useEffect(function () {

        setTimeout(function () { dispatch({ type: "getBookList", justUnfished: true }) }, 0)
    }, [])


    return (

      <div className="book-list ">
           {user.username&& <BookForm />}

            <ul>
                {
                    bookList.map(book => {

                        return <BookDetails style={props} {...{ key: book.id, book }}/*book={book}*/ />



                    })
                }
            </ul>
        </div>

       

    );
}

export default BookList;