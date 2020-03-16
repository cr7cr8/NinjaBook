import React, { createContext, useState } from 'react';
import { bookListFunctions, initialState } from './bookListFunctions';


export const BookListContext = createContext()


const BookListContextProvider = (props) => {



    const [bookList, setState] = useState(initialState)

    const dispatch = (paramObj) => {

        return bookListFunctions(bookList, setState, paramObj)
    }


    return (
        <BookListContext.Provider value={{ bookList, dispatch }}>
            {props.children}
        </BookListContext.Provider>

    );
}

export default BookListContextProvider;




// const [books, dispatch] = useReducer(bookReducer, [
//     { title: "name of the wind", author: "Patrick rothfuss", id: 1 },
//     { title: "the way of kings", author: "brande sandera", id: 2 },
//     { title: "the final empire", author: "jillk huss", id: 3 },
//     { title: "the hero of ages", author: "snelck dussbd", id: 4 }
// ])

