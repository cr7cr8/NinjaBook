import React, { createContext, useReducer, useEffect } from 'react';



import { useBookListStateManager } from './BookListContextTools/useBookListStateManager';



export const BookListContext = createContext()


const BookListContextProvider = (props) => {


    const [bookList, dispatch] = useBookListStateManager()


//     const [books, dispatch] = useReducer(
//         bookReducer,
//         JSON.parse(localStorage.getItem("books")) ||
//         [{ title: "Welcome to use", author: Date(), id: Date.now() }]

//     )


//    useEffect(() => {

//        dispatch({ type: "setLocalStorage" })

//         localStorage.setItem("books", JSON.stringify(books))

//    }, [books])


    return (
        <BookListContext.Provider value={{ bookList, dispatch }}>
        {/* <BookListContext.Provider value={{ books, dispatch }}> */}
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

