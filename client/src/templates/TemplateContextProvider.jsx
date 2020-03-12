import React, { createContext ,useEffect} from 'react';
import  useTemplateStateManager  from './useTemplateStateManager';
import  templateFunctions,{initialState}  from './templateFunctions';

export const TemplateContext = createContext()


const TemplateContextProvider = (props) => {

    const [state, dispatcher] = useTemplateStateManager(   templateFunctions ,initialState )
        
    useEffect(function(){

      //  dispatcher({action:"gogo",newName:"cccccsssdd"})

    },[])


    return (
        <TemplateContext.Provider value={{ state, dispatcher }}>
            {props.children}
           
        </TemplateContext.Provider>
    );
}

export default TemplateContextProvider;

