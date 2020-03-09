import React, { createContext, useContext, useState,useReducer, useEffect} from 'react';
//import { bookReducer } from '../reducers/BookReducer';


export const ThemeContext = createContext()


const ThemeContextProvider = (props) => {




    // const [books, dispatch] = useReducer(
    //     bookReducer,
    //     JSON.parse(localStorage.getItem("books")) ||
    //     [{ title: "name of the wind", author: "Patrick rothfuss", id: 1 },
    //     { title: "the way of kings", author: "brande sandera", id: 2 },
    //     { title: "the final empire", author: "jillk huss", id: 3 },
    //     { title: "the hero of ages", author: "snelck dussbd", id: 4 }
    //     ]
    // )


    // useEffect(() => {

    //     localStorage.setItem("books", JSON.stringify(books))

    // }, [books])


    return (

        <ThemeContext.Provider value={{ books, dispatch }}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;



