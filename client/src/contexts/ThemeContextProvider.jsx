import React, { createContext, useContext, useState,useReducer, useEffect} from 'react';
//import { bookReducer } from '../reducers/BookReducer';


export const ThemeContext = createContext()


const ThemeContextProvider = (props) => {


    const reducer = (state,paramObj)=>{
        
        if (paramObj.type === "addBook") {  return {...state}  }
        else{ return state }
           
    }

    const [state, dispatch] = useReducer(  reducer, {/* initialState Object */}  )
    
    useEffect(() => {  }, [/* call effect funtion based on the passed in state change */])


    return (

        <ThemeContext.Provider value={{ books, dispatch }}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;



