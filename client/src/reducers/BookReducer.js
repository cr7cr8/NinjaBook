


export const bookReducer = (state, paramObj) => {



    if (paramObj.type === "addBook") {

        return [...state, { title: paramObj.book.title, author: paramObj.book.author , id: Date.now() }]

    }

    else if (paramObj.type === "removeBook") {

        return state.filter((book=>{
            return book.id!==paramObj.id
        }))
    }
    else {
        return state
    }

  



    // if (paramObj.type = "addBook") {


    //     return [...state, { title: paramObj.book.title||"dymmy", author: paramObj.book.author||"dymmy", id: Date.now() }]
    // }
    // else if (paramObj.type = "removeBook") {



    //     return state.filter((book) => {

    //         return book.id !== paramObj.id

    //     })
    // }
    // else {
    //     return state
    // }
}