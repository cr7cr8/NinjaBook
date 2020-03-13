




import { useState } from "react";

export const useUserStateManager = (userFunctions, initialState = {username:""}) => {




  const [state, setState] = useState(initialState);

  const dispatch = (actionObj) => {


    const result = userFunctions(state, actionObj)


    if (Promise.resolve(result) !== result) {
      setState({ ...state, ...result })
    }
    else {
      result
        .then(data => { setState({ ...state, ...data }) })
        .catch(error => { alert(error); console.log(error); setState({ ...state, promiseError: error }) })

    }

  }

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

