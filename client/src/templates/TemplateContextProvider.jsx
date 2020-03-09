import React, { createContext, useState,useReducer, useEffect, useContext } from 'react';
//import { bookReducer } from '../reducers/BookReducer';


export const TemplateContext = createContext()


const TemplateContextProvider = (props) => {


    const reducer = (contextState,paramObj)=>{
        
        if (paramObj.methodName === "addBook") {  return {...contextState}  }
        else{ return contextState }
           
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

