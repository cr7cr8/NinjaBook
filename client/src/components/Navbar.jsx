import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'
import { Route, Switch, Link, } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextProvider';

const Navbar = (props) => {

  const { books, dispatch:dispatchBook } = useContext(BookContext);
  const { user, dispatch: dispatchUser } = useContext(UserContext)
  return (
    <React.Fragment>




      <nav className="navbar">

        <h1>{user.username} Reading List...</h1>
        <p>Currently you have {books.length} books to get through...</p>

       
        
      </nav>
      <button> <Link to="/">home </Link> </button>
      <button>  <Link to="/login" >login  </Link></button>
      <button>  <Link to="/register">register  </Link></button>
    
      <button style={{float:"right"}} onClick={dispatchBook.bind(null, { type: "removeLocalStorage" })}>Default</button>
      <button style={{float:"right"}} onClick={dispatchUser.bind(null, { type: "removeLocalStorage" })}>logout</button>

      {!Boolean(books.length) ? <p style={{ textAlign: "center" }}>No books to read, Hello free time :)</p> : <p></p>}
    </React.Fragment>
  );
}

export default Navbar;