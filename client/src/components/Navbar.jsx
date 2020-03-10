import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'
import { Route, Switch,Link ,} from 'react-router-dom';

const Navbar = (props) => {

    const { books,dispatch } = useContext(BookContext);

    return (
        <React.Fragment>
              <Link to="/" style={{color: "white"}}>home </Link>
              <Link to="/login" style={{color: "white"}}>login  </Link>
              <Link to="/register" style={{color: "white"}}>register  </Link>
      
        

            <nav className="navbar">
            
                <h1>Ninja Reading List...</h1>
                <p>Currently you have {books.length} books to get through...</p>

              <div>  <input type="submit" value="Default" onClick={dispatch.bind(null,{type:"removeLocalStorage"})}/></div>
         
            </nav>
         
            {!Boolean(books.length) ? <p style={{ textAlign: "center" }}>No books to read, Hello free time :)</p> : <p></p>}
        </React.Fragment>
    );
}

export default Navbar;