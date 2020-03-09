import React from 'react';
import Joi from 'joi-browser';


const Form = ({ state, schema, setState, doSubmit }) => {


    const handleChange = (e) => {
        // e.persist();



        state['data'][e.currentTarget.name] = e.currentTarget.value

        state['error'] = validateProperty(e)
            ? { ...state['error'], [e.currentTarget.name]: validateProperty(e) }
            : (function () { delete state['error'][e.currentTarget.name]; return state['error'] })()

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
                        <input id={keyName}className="form-control" type="text" name={keyName} value={state['data'][keyName]} onChange={handleChange} />

                        <div >{state['error'][keyName]}</div>
                    </div>
                )
            })}
           <div> <input disabled={Boolean(Object.keys(state.error).length)} type="submit" value="submit"></input></div>
        </form >


    )

}

export default Form;