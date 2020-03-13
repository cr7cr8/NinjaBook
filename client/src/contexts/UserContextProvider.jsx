import React, { createContext, useState, useReducer, useEffect, useContext } from 'react';

import jwtDecode from "jwt-decode"


import { useUserStateManager } from './UserContextTools/useUserStateManager'
import { userFunctions,initialState } from './UserContextTools/userFunctions'




export const UserContext = createContext()


const UserContextProvider = (props) => {

    console.log(initialState)

    const [user, dispatcher] = useUserStateManager(userFunctions, initialState)


    // useEffect(function(){

    //   //  dispatcher({action:"fetchUser",user})
    // })
    
    

    if(user.username="dummy"){

        return <hi>no user</hi>
    }



    return (
        <UserContext.Provider value={{ user, dispatcher }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

