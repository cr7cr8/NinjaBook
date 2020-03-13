import jwtDecode from "jwt-decode"



export const initialState = JSON.parse(localStorage.getItem("user")) || { username: "dummy" }




export const userFunctions = (user, { type = "", ...paramObj }) => {



  if (type === "changeName") {
    return { username: paramObj.username }
  }
  else if (type === "removeLocalStorage") {

    setTimeout(function () {
      localStorage.removeItem("user")
      alert("user lcoal storage removed")
    }, 0)


    return { username: "dummy" }
  }
  else if (type === "fetchUser") {


    return fetch("http://localhost/api/user/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paramObj)
    })
      .then((response) => {

        const token = response.headers.get('x-auth-token')
        const decodeToken = jwtDecode(token)

        setTimeout(function () {

          alert(user.username + "\n" + decodeToken.username)
          if (user.username !== decodeToken.username) {


            localStorage.setItem("user", JSON.stringify(decodeToken))
          }

        }, 1000)

        return decodeToken

      })

      .catch(error => {
        return error
      })

  }



  else { return user }


}


function setToken(token) {
  localStorage.set("token", token)
}

function getToken(){

  return localStorage.get("token")
}
function getDecodedToken() {

  const token = localStorage.get("token")
  const decodeToken = jwtDecode(token)

  return decodeToken
}

