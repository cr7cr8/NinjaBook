import React, { useState, useContext, useEffect, useCallback, useMemo, } from 'react';
import { TemplateContext } from './TemplateContextProvider';





const TemplateComponent = (props) => {

    const [state, dispatch] = useContext(TemplateContext)
    return (
        <React.Fragment>

{/* onClick={() => { dispatch({ type: "removeBook", id: book.id }) }} */}
    
    
        </React.Fragment>

    );
}

export default TemplateComponent;