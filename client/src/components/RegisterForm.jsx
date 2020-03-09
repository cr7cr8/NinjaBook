import React, { useState } from 'react';
import Joi from 'joi-browser'
import Form from './Form';
const RegisterForm = () => {


    const [state, setState] = useState(

        {

            data: {
                username: "",
                password: "",
                password2: ""
            },

            error: {
                username: "",
                password: "",
                password2: "",
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
        console.log("Register Form")

    }
    // const handleChange = (e) => {
    //    // e.persist();

    //     state['data'][e.currentTarget.name] = e.currentTarget.value

    //     state['error']= validateProperty(e)
    //                 ?{...state['error'],[e.currentTarget.name]:validateProperty(e) }
    //                 :(function(){   delete state['error'][e.currentTarget.name]  ; return state['error']        })()

    //     console.log(state.error)
    //     setState({ ...state })

    // }


    // const validateProperty = (e) => {

    //     const result = Joi.validate(e.currentTarget.value, schema[e.currentTarget.name], { abortEarly: false })
    //     return result.error ? result.error.details[0].message : null
    // }



    return (

        <Form {...{ state, schema,setState, doSubmit }} />
        // <div>
        //     <form>
        //         <input type="text" name="username" value={state.data.username} onChange={handleChange}></input>
        //         <div>{state.error.username}</div>
        //         <input type="text" name="password" value={state.data.password} onChange={handleChange}></input>
        //         <div>{state.error.password}</div>
        //         <input disabled={Boolean(Object.keys(state.error).length)} type="submit" value="submit"></input>


        //     </form>

        // </div>

    );
}

export default RegisterForm