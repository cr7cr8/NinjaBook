import React, { createContext, useState,useReducer, useEffect, useContext } from 'react';
//import { bookReducer } from '../reducers/BookReducer';


export const TemplateContext = createContext()


const TemplateContextProvider = (props) => {


    const reducer = (state,paramObj)=>{
        
        if (paramObj.type === "addBook") {  return {...state}  }
        else{ return state }
           
    }


    const [state, dispatch] = useReducer(  reducer, {/* initialState Object */}  )
    
    useEffect(() => {  }, [/* call effect funtion based on the passed in state change */])
    
    return (
        <TemplateContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TemplateContext.Provider>
    );
}

export default TemplateContextProvider;

