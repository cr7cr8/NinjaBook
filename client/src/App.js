import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



import BookContextProvider from './contexts/BookContextProvider';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import LoginForm from './components/LoginForm';



const App = (props) => {
  return (

    <div className="App">

      <LoginForm />

      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>



    </div>

  );
}

export default App;



