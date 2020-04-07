import React, { createContext, useState } from 'react';

import { userFunctions, initialState } from './userFunctions';

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [user, setState] = useState(initialState)

    const dispatch = (paramObj) => {
        return userFunctions(user, setState, paramObj)
    }


    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

