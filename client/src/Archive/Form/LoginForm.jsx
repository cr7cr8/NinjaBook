import React, { useState } from 'react';
import Joi from 'joi-browser'
import Form from '../../components/Form/Form';
const LoginForm = () => {


    const [state, setState] = useState(
        {
            data: {
                username: "",
                password: "",
         
            },

            error: {
                username: "",
                password: "",
            },
        }
    )


    const schema = {
        username: Joi.string().min(3).required().label("Username"),
        password: Joi.string().min(3).required().label("Password"),

        password2:Joi.any().valid(state.data.password).required().options({ language: { any: { allowOnly: 'is not matching' } } }).label("Retyped Passwrod")
    }
    const doSubmit = (e) => {
        e.preventDefault();
        console.log("login")

    }
  
    return (

        <Form {...{ state, schema,setState, doSubmit }} />
     
    );
}

export default LoginForm