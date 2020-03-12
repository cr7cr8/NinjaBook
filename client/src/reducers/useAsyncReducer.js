




import { useState } from "react";

export const useAsyncReducer = (reducerFunctions, initialState = null) => {
  
  const [state, setState] = useState(initialState);

  const dispatch = async action => {
    const result = reducerFunctions(state, action);
    if (typeof result.then === "function") {
      try {
        const newState = await result;
        setState(newState);
      } catch (err) {
        setState({ ...state, error: err });
      }
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};





// import { useState, useContext, useEffect, useCallback, useMemo, } from 'react';
// //import { reducerFunction } from './reducerFunction'
// //import { TemplateContext } from './TemplateContextProvider';





// export const useAsyncReducer = (reducer, initialState = null) => {

//   const [state, setState] = useState(initialState);
 

//   const dispatch = async action => {
//     const result = reducer(state, action);
  
//   };

//   return [state, null];
// };

