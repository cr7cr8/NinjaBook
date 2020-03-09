import React, { useState, useEffect } from 'react';
import Joi from 'joi-browser';


const Form = ({ isRegisterForm = true }) => {


    const [state, setState] = useState(
        {

            data: {
                username: "",
                password: "",
                password2: "",
            },

            error: {
                // username: "",
                // password: "",
                // password2: ""
            },
        }
    )

    useEffect(() => {
        if (!isRegisterForm) {
            delete state.data.password2
            setState({ ...state })
        }

    }, [])


    const schema = {
        username: Joi.string().min(3).required().label("Username"),
        password: Joi.string().min(3).required().label("Password"),

        password2: Joi.any().valid(state.data.password).required().options({ language: { any: { allowOnly: 'is not matching' } } }).label("Retyped Passwrod")
    }
    const doSubmit = (e) => {
        e.preventDefault();
        console.log("login")

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
                else{

                    state['error']['password2']="Two passwords are not matching"
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
                        <input id={keyName} className="form-control" type="text" name={keyName} value={state['data'][keyName]} onChange={handleChange} />

                        <div >{state['error'][keyName]}</div>
                    </div>
                )
            })}
            <div> <input disabled={Boolean(Object.keys(state.error).length)} type="submit" value="submit"></input></div>
        </form >


    )

}

export default Form;