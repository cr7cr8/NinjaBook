import jwtDecode from "jwt-decode"


export const userReducerFunctions = (user, { type = "", ...paramObj }) => {

  return new Promise(function (resolve, reject) {

    if (type === "changeName") {
      resolve({ username: paramObj.username } )
    }
    else if (type === "setLocalStorage") {
      localStorage.setItem("user", JSON.stringify(user))
      resolve(user)
    }
    else if (type === "removeLocalStorage") {

      setTimeout(function () {
        localStorage.removeItem("user")
        alert("user lcoal storage removed")
      }, 0)
      resolve({ username: "dummy" } )
    }

    else if (type === "fetchUser") {
      
      const p = new Promise(function(resolve,reject){
        setTimeout(function () {
          resolve({username:paramObj.username})
        }, 1000)
      })
     
      resolve(p)

    }



  })


}




// export const userReducerFunctions = (user, { type = "", ...paramObj }) => {

//     if (type === "changeName") {
//         return { ...user, ...{ username: paramObj.username } }
//     }
//     else if (type === "setLocalStorage") {

//         localStorage.setItem("user", JSON.stringify(user))
//         return user
//     }
//     else if (type === "removeLocalStorage") {

//         setTimeout(function () {
//             localStorage.removeItem("user")
//             alert("user lcoal storage removed")
//         }, 0)


//         return { ...user, ...{ username: "dummy" } }
//     }
//     else if (type === "fetchUser") {


//        // useAsyncReducer(user)

//        // asyncReducer(user)
//      // const p = Promise.resolve({username:"ddddd"})
//       //  console.log()

//       return {...user,...Promise.resolve({...user,username:"tttt"})
//       .then(data=>{return {...user,...data}})}

//     //    return {username:"dddd"}
//       //  return {...user,...asyncState}
//     }



//     else { return user }

// }






  // fetch("http://localhost/api/user/login", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(state.data)
        // })
        //     .then((response) => {
        //         return response//.json();
        //     })
        //     .then((response) => {

        //         const token = response.headers.get('x-auth-token')
        //         const decodeToken = jwtDecode(token)
        //         dispatchUser({type:"changeName",username:decodeToken.username})
        //         console.log(decodeToken)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })






        // console.log(paramObj)
        // return Promise.resolve(fetch("http://localhost/api/user/login", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(paramObj)
        // }).then((response) => {
        //     return response//.json();
        // })
        //     .then((response) => {

        //         const token = response.headers.get('x-auth-token')
        //         const decodeToken = jwtDecode(token)

        //         console.log(decodeToken)
        //         alert(decodeToken.username)


        //         //    return Promise.resolve({ ...user, ...decodeToken })
        //         // console.log(decodeToken)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // )