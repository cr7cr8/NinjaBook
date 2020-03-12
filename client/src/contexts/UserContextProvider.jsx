import React, { createContext, useState, useReducer, useEffect, useContext } from 'react';

import jwtDecode from "jwt-decode"


import { useAsyncReducer } from '../reducers/useAsyncReducer'
import { userReducerFunctions } from '../reducers/UserReducerFunctions'




export const UserContext = createContext()


const UserContextProvider = (props) => {


    const [user, dispatch] = useAsyncReducer(userReducerFunctions, { username: "Dddd" })



    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

