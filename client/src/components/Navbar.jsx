import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider'


const Navbar = (props) => {

    const { books,dispatch } = useContext(BookContext);

    return (
        <React.Fragment>
            <nav className="navbar">
                <h1>Ninja Reading List...</h1>
                <p>Currently you have {books.length} books to get through...</p>

                <input type="submit" value="Default" onClick={dispatch.bind(null,{type:"removeLocalStorage"})}/>


                {/*(function(){return [1,2,3,4,5]}())*/}
            </nav>
            {!Boolean(books.length) ? <p style={{ textAlign: "center" }}>No books to read, Hello free time :)</p> : <p></p>}
        </React.Fragment>
    );
}

export default Navbar;