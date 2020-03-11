import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



import BookContextProvider from './contexts/BookContextProvider';
import BookList from './components/BookList';
import Navbar from './components/Navbar';


import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';




const App = (props) => {
  return (

    <div className="App">


      <BookContextProvider>
        <Navbar />

        <Switch>

      
          {/* <Route path="/login" render={(props) => { return <Form {... { ...{ isRegisterForm: false }, ...props }} /> }} />
          <Route path="/register" render={(props) => { return <Form isRegisterForm={true}  {...props} /> }} /> */}
         
      
          <Route path="/login" render={(props) => { return <LoginForm {...props } /> }} />
          <Route path="/register" render={(props) => { return <RegisterForm  {...props} /> }} /> 


          <BookList />
        </Switch>

      </BookContextProvider>



    </div>

  );
}

export default App;



