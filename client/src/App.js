import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



import BookContextProvider from './contexts/BookContextProvider';
import BookList from './components/BookList/BookList';
import Navbar from './components/Navbar';
import Form from './components/Form';



const App = (props) => {
  return (

    <div className="App">

      <Form />

      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>

 

    </div>

  );
}

export default App;



