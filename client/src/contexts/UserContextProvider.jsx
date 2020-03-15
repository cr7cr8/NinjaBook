import React, { createContext, useState, useReducer, useEffect, useContext } from 'react';



import { useUserStateManager } from './UserContextTools/useUserStateManager'

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [user, dispatch] = useUserStateManager()
   // useEffect(function () {   }, [])

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

