import jwtDecode from "jwt-decode"
import axios from "axios";


export const initialState = (function () {

  const token = getDecodedToken()

  return token
    ? { username: token.username }
    : { username: "" }
}());


export const userFunctions = (user, { type = "", ...paramObj }) => {



  if (type === "removeLocalStorage") {
 
      localStorage.removeItem("token")
    
   
    return { username: "" }
  }
  else if (type === "login") {

    return axios
      .post("http://localhost/api/user/login", paramObj)
      .then(response => {

        setToken(response.headers["x-auth-token"])
        return Promise.resolve(response.data)
      })
      .catch(err => {
        err.response.data.indexOf("user") > -1
          ? paramObj.setErrMsg("username", err.response.data)
          : paramObj.setErrMsg("password", err.response.data)

        return Promise.reject(err.response.data)
      })

  }
  else { return user }


}



function setToken(token) {
  localStorage.setItem("token", token)
}

function getToken() {

  return localStorage.getItem("token")
}
function getDecodedToken() {



  const token = localStorage.getItem("token")

  return Boolean(token) ? jwtDecode(token) : null




}



