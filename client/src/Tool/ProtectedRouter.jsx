import React, { Component } from 'react';
//import jwtDecode from "jwt-decode"
import { Route, Redirect } from "react-router-dom"



const ProtectedRoute = ({ renderLogin, renderReg, ...rest }) => {

   // const user = localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : "";
    //<Route path="/movie" render={(props) => { return <Movies {...props}  user={this.state.user} /> }} />
  

    return (

       
        <Route

            {...rest}
             render={

                
                 (props) => {
                   return props==="/login"
                  
                  
                  
                   ?renderLogin(props)
                   :renderReg(props)
                
               
                 }
            
            }


        // (props) => {
        //     return (
        //         <React.Fragment>

        //            { user&&<Component {...{...props,...rest}}  />}
        //         </React.Fragment>

        //     )
        // }



        />



    )
}












export default ProtectedRoute;