import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const BookContext = createContext()


const BookContextProvider = (props) => {




    const [books, dispatch] = useReducer(
        bookReducer,
        JSON.parse(localStorage.getItem("books")) ||
        [{ title: "Welcome to use", author: Date(), id: Date.now() }]

        // [{ title: "name of the wind", author: "Patrick rothfuss", id: 1 },
        // { title: "the way of kings", author: "brande sandera", id: 2 },
        // { title: "the final empire", author: "jillk huss", id: 3 },
        // { title: "the hero of ages", author: "snelck dussbd", id: 4 }
        // ]
    )


    useEffect(() => {

        dispatch({ type: "setLocalStorage" })

        // localStorage.setItem("books", JSON.stringify(books))

    }, [books])


    return (

        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>

    );
}

export default BookContextProvider;




// const [books, dispatch] = useReducer(bookReducer, [
//     { title: "name of the wind", author: "Patrick rothfuss", id: 1 },
//     { title: "the way of kings", author: "brande sandera", id: 2 },
//     { title: "the final empire", author: "jillk huss", id: 3 },
//     { title: "the hero of ages", author: "snelck dussbd", id: 4 }
// ])

