
import { useState } from "react";


const useTemplateStateManager = (templateFunctions, initialState = {}) => {

  const [state, setState] = useState(initialState)



  const dispatch = (actionObj) => {

    const result = templateFunctions(state, actionObj)

    if (Promise.resolve(result) !== result) {
      setState({ ...state, ...result })
    }
    else {
      result
        .then(data => { setState({ ...state, ...data }) })
        .catch(error => { alert(error); console.log(error); setState({ ...state, promiseError: error }) })

    }

  }
  return [state, dispatch]
}

export default useTemplateStateManager