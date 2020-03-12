import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import Joi from 'joi-browser';
import jwtDecode from "jwt-decode"

import { UserContext } from "../../contexts/UserContextProvider"

const Form = (props) => {

    console.log(props.location.pathname)
    const { user, dispatch: dispatchUser } = useContext(UserContext)

    let isRegisterForm = props.isRegisterForm


    const [state, setState] = useState(
        {


            format: ["text", "password", "password"],

            data: {
                username: "", password: "", password2: "",
            },

            error: {
                username: "", password: "", password2: ""
            },
        }
    )



    // useMemo(function(){
    //     setState({...state})

    // },props.location)



    const button = useRef();
    useEffect(
        () => {

            if (!isRegisterForm) {
                delete state.data.password2
                delete state.error.password2
                state.format.pop()
                setState({ ...state })
            }

            //   button.current.disabled = "true"
            //   button.current.value = isRegisterForm ? "Sign Up" : "Login"

        }, [])


    const schema = {
        username: Joi.string().min(3).required().label("Username"),
        password: Joi.string().min(3).required().label("Password"),

        password2: Joi.any().valid(state.data.password).required().options({ language: { any: { allowOnly: 'is not matching' } } }).label("Retyped Passwrod")
    }



    const doSubmit = (e) => {
        e.preventDefault();
        dispatchUser({ type: "fetchUser", ...state.data })
        // console.log(state.data)
        // console.log(dispatchUser({ type: "fetchUser", ...state.data }))

        // setTimeout(() => { console.log("-----", state.data); setState(...{ state }) }, 1000)

      


       // console.log(isRegisterForm ? "Register" : "login")

    }


    const handleChange = (e) => {
        // e.persist();

        state['data'][e.currentTarget.name] = e.currentTarget.value

        state['error'] = validateProperty(e)
            ? { ...state['error'], [e.currentTarget.name]: validateProperty(e) }
            : (function () { delete state['error'][e.currentTarget.name]; return state['error'] })()

        if (isRegisterForm && (e.currentTarget.name === "password")) {
            if (!state['error']['password']) {

                if (state['data']['password'] === state['data']['password2']) {
                    delete state['error']['password2']
                }
                else {

                    state['error']['password2'] = "Two passwords are not matching"
                }
            }
        }

        console.log(state.error)
        setState({ ...state })

    }


    const validateProperty = (e) => {

        const result = Joi.validate(e.currentTarget.value, schema[e.currentTarget.name], { abortEarly: false })
        return result.error ? result.error.details[0].message : null
    }




    return (

        <form onSubmit={doSubmit}>


            {Object.keys(state.data).map((keyName, i) => {

                return (
                    <div className="form-group" key={keyName}>

                        <label htmlFor={keyName}>{[...keyName,].shift().toLocaleUpperCase()}{keyName.substr(1)}</label>
                        <input id={keyName} className="form-control" type={state.format[i]} name={keyName} value={state['data'][keyName]} onChange={handleChange} />

                        <div >{state['error'][keyName]}</div>
                    </div>
                )
            })}
            <div>

                <input ref={button}
                    type="submit"
                    disabled={Boolean(Object.keys(state.error).length)}
                    value={isRegisterForm ? "Regist" : "Login"
                    } />
            </div>
        </form >


    )

}

export default Form;