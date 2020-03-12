


export const initialState = {
    aaa: "dfdfssfds"
}

function templateStateFunctions(state, { action, ...paramObj }) {

    if(action ==="gogo"){

        return Promise.resolve(paramObj)
    }

    return state

}

export default templateStateFunctions