import jwtDecode from "jwt-decode"
import axios from "axios";
import url from "../../config";


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
  else if (type === "register") {

    console.log(paramObj)

    return axios
      .post(`${url}/user/register`,
        { username: paramObj.username, password: paramObj.password }
      )
      .then(response => {
        setToken(response.headers["x-auth-token"])
        return Promise.resolve(response.data)
      })
      .catch(err => {
        err.response.data.indexOf("user") > -1
          ? paramObj.setErrMsg("username", err.response.data)
          : paramObj.setErrMsg("username", err.response.data)

        return Promise.reject(err.response.data)
      })


  }
  else if (type === "login") {

    return axios
      .post(`${url}/user/login`, paramObj)
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



