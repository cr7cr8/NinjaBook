import React, { createContext, useState, useReducer, useEffect, useContext } from 'react';

import jwtDecode from "jwt-decode"


import { useUserStateManager } from '../reducers/useUserStateManager'
import { userFunctions } from '../reducers/userFunctions'




export const UserContext = createContext()


const UserContextProvider = (props) => {


    const [user, dispatch] = useUserStateManager(userFunctions, { username: "Dddd" })



    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

