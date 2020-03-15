import React, { createContext ,useEffect} from 'react';

import useTemplateStateManager from './TemplateContextTools/useTemplateStateManager';
import templateStateFunctions ,{initialState} from './TemplateContextTools/templateFunctions';

export const TemplateContext = createContext()


const TemplateContextProvider = (props) => {

    const [state, dispatch] = useTemplateStateManager(   templateStateFunctions ,initialState )
        
    useEffect(function(){

      //  dispatcher({action:"gogo",newName:"cccccsssdd"})

    },[])


    return (
        <TemplateContext.Provider value={{ state, dispatch }}>
            {props.children}
           
        </TemplateContext.Provider>
    );
}

export default TemplateContextProvider;

