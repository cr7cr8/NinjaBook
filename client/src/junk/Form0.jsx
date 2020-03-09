import React from 'react';
import Joi from 'joi-browser'


const Form = ({ state, setState, doSubmit }) => {


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

        const result = Joi.validate(e.currentTarget.value, state['schema'][e.currentTarget.name], { abortEarly: false })
        return result.error ? result.error.details[0].message : null
    }

    const renderSelect0 = (props) => {
        return (
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>

                <select
                    className="form-control"
                    //    defaultValue={props.value || "DEFAULT"}
                    onChange={props.handleChange}
                    name={props.name}
                    id={props.name}
                    value={props.value}
                >
                    <option value="DEFAULT" disabled={true}> -- select an option -- </option>
                    {
                        props.options.map((e, i) => {
                            return <option value={e} key={i}>{e}</option>
                        })
                    }
                    <option>aaa</option>

                </select>
                {props.error && <div className="alert alert-danger " >{props.error}</div>}
            </div>
        )
    }

    const renderSelect = (props) => {

        return (

            <select
            //  className="form-control"
            //    defaultValue={props.value || "DEFAULT"}
            //onChange={props.handleChange}
            //name={props.name}
            //id={props.name}
            //value={props.value}
            >
                <option value="DEFAULT" disabled={true}> -- select an option -- </option>
                {
                    // props.options.map((e, i) => {
                    //     return <option value={e} key={i}>{e}</option>
                    // })
                }
                <option>aaa</option>

            </select>

        )
    }

    const renderInput = (props) => {
        return (
            <React.Fragment>




                {React.createElement(state["format"].shift())}
                <hr />
            </React.Fragment>

            //      <{{state["format"][0]}>
            //     <input type="text" name={state[]} value={state['data'][keyName]} onChange={handleChange} />

        )
    }







    return (


//         <form onSubmit={doSubmit}>

// {React.createElement(state["format"][0]["tag"],{...state["format"][0]}         )}

// {React.createElement(state["format"][1]["tag"],state["format"][1]         )}

//         </form>




        <form onSubmit={doSubmit}>
            {Object.keys(state.data).map((keyName, i) => {

                return (
                    <React.Fragment key={keyName}>
                        <input type="text" name={keyName} value={state['data'][keyName]} onChange={handleChange} />

                        <div >{state['error'][keyName]}</div>
                    </React.Fragment>
                )
            })}
            <input disabled={Boolean(Object.keys(state.error).length)} type="submit" value="submit"></input>
        </form>


    )

}

export default Form;