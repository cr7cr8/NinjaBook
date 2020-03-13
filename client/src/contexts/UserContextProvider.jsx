import React, { createContext, useState, useReducer, useEffect, useContext } from 'react';

import jwtDecode from "jwt-decode"


import { useUserStateManager } from './UserContextTools/useUserStateManager'
import { userFunctions, initialState } from './UserContextTools/userFunctions'




export const UserContext = createContext()


const UserContextProvider = (props) => {

  //  console.log(initialState)

    const [user, dispatch] = useUserStateManager(userFunctions, initialState)



    useEffect(function () {
  
     //   if (user.username === "") {
     //       dispatch({ type: "fetchDemo" })
     //   }

    }, [])





    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

