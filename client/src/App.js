import React, { Component, useContext, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';



import BookListContextProvider from './contexts/BookListContextProvider';

import BookList from './components/BookList';
import Navbar from './components/Navbar';


import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserContextProvider from './contexts/UserContextProvider';



console.log(process.env.NODE_ENV)

const App = (props) => {
    
  return (

    <div className="App">
      
      <Suspense></Suspense>


      <UserContextProvider>
        <BookListContextProvider>

          <Navbar />
          <Switch>

            {/* <Route path="/login" render={(props) => { return <Form {... { ...{ isRegisterForm: false }, ...props }} /> }} />
          <Route path="/register" render={(props) => { return <Form isRegisterForm={true}  {...props} /> }} /> */}


            <Route path="/login" render={(props) => { return <LoginForm {...props} /> }} />
            <Route path="/register" render={(props) => { return <RegisterForm  {...props} /> }} />


            <BookList />
          </Switch>

        </BookListContextProvider>
      </UserContextProvider>

    </div>

  );
}

export default App;



