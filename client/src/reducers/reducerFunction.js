


export const reducerFunction = (state, { type, ...paramObj }) => {

    if (type === "a") {

        return new Promise(function (resolve, bad) {

            setTimeout(function () { resolve("ppppp===aaaaa") }, 3000)

        })

    }
    else if (type === "b") {


        return new Promise(function (resolve, bad) {

            setTimeout(function () { resolve("ddddd") }, 0)

        })


    }
    else if (type === "fetchUser") {

        return new Promise(function (resolve, bad) {

            setTimeout(function () { 
                resolve({username:"tom"})}, 0)

        })



    }




    else {

        return Promise.resolve(state)
    }


}