




import { useState } from "react";
import { userFunctions, initialState } from './userFunctions'


export const useUserStateManager = ( ) => {




  const [state, setState] = useState(initialState);

  const dispatch = (actionObj) => {

    const result = userFunctions(state, setState,actionObj)
    // if (Promise.resolve(result) !== result) {
    //   setState({ ...state, ...result })

    // }
    // else {
    //   result
    //     .then(data => {
    //       //setState({ ...state, ...data })
    //       window.location.assign("/")
    //       //this.props.history.push("/")
    //    //   setTimeout(function(){window.location.assign("/")})
    //     })
    //     .catch(err => {
    //       setState({ ...state })
    //     })

    // }

  }

  return [state, dispatch];
};




