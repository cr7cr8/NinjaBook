import React, { useContext, useState  } from 'react';
import { BookListContext } from '../contexts/BookListContextProvider'
import { Route, Switch, Link, } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextProvider';

import { Spring } from 'react-spring/renderprops';


const Navbar = (props) => {

  const [goalHeight, setGoalHeight] = useState(100)
  const { bookList, dispatch: dispatchBook } = useContext(BookListContext);
  const { user, dispatch: dispatchUser } = useContext(UserContext)

  console.log(Boolean(user.username))




  return (
    <Spring from={{ opacity: 0, height: 0 }} to={{ opacity: 1, height: goalHeight }} >
      {(props) => {
        return (

          <React.Fragment>

            <nav className="navbar" style={props}>

              <h1>{user.username} Reading List...</h1>
              <p>Currently you have {bookList.length} books to get through...</p>


            </nav>
            <button> <Link to="/">home </Link> </button>
            {!user.username && <button>  <Link to="/login" >login  </Link></button>}
            {!user.username && <button>  <Link to="/register">register  </Link></button>}

            {/* <button style={{float:"right"}} onClick={dispatchBook.bind(null, { type: "removeLocalStorage" })}>Default</button> */}
            {user.username && <button style={{ float: "right" }}
              onClick={function () {
                dispatchBook({ type: "logout" })

                dispatchUser({ type: "removeLocalStorage" })

                window.location.assign("/")
              }}>
              logout
        </button>
            }
            {!Boolean(bookList.length) ? <p style={{ textAlign: "center" }}>No books to read, Hello free time :)</p> : <p></p>}
          </React.Fragment>
        )
      }}



    </Spring>
  );
}

export default Navbar;