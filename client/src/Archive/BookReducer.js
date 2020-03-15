


export const bookReducer = (state, {type,...paramObj}) => {

    if (type === "addBook") {




        return [...state, { title: paramObj.book.title, author: paramObj.book.author, id: Date.now() }]

    }
    else if (type === "removeBook") {

        return state.filter((book => {
            return book.id !== paramObj.id
        }))
    }
    else if (type === "setLocalStorage") {

        localStorage.setItem("books", JSON.stringify(state))
        return state
    }

    else if (type === "removeLocalStorage") {

        setTimeout(function () {
            localStorage.removeItem("books")
            alert("lcoal storage removed !")
        }, 0)


        return []
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