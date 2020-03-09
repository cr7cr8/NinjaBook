import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



import BookContextProvider from './contexts/BookContextProvider';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
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



