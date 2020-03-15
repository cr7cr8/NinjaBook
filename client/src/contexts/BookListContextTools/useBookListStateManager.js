
import { useState } from "react";

import { bookListFunctions, initialState } from './bookListFunctions';


export const useBookListStateManager = () => {


  const [state, setState] = useState(initialState);

  const dispatch = (actionObj) => {

    const result = bookListFunctions(state, setState, actionObj)
    // if (Promise.resolve(result) !== result) {
    //   setState([ ...state, ...result ])

    // }
    // else {
    //   result
    //     .then(data => {
    //       setState([ ...state, ...data ])
    //       //this.props.history.push("/")
    //       //window.location.assign("/")
    //     })
    //     .catch(err => {
    //       setState([ ...state ])
    //     })

    // }

  }

  return [state, dispatch];
};
