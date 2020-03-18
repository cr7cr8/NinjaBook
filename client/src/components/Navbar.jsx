import React, { useContext, useState} from 'react';
import { BookListContext } from '../contexts/BookListContextProvider'
import { Route, Switch, Link, } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextProvider';


import SwitchButton from "react-switch";

const Navbar = (props) => {


  const { bookList, dispatch: dispatchBook } = useContext(BookListContext);
  const { user, dispatch: dispatchUser } = useContext(UserContext)

  const [btnOn, setBtnOn] = useState(false)


  return (


    <React.Fragment>

      <nav className="navbar" style={props}>

        <h1>{user.username} Reading List...</h1>
        <p>Currently you have {bookList.length} books to get through...</p>

        <SwitchButton
          checked={btnOn}
          onChange={function () { !btnOn ? dispatchBook({ type: "getBookList" }) : dispatchBook({ type: "cleanFinish" }); setBtnOn(!btnOn) }}
          
          onColor="#6d3d6d"
          offColor="#6d3d6d"
          
          offHandleColor="#eeeeee"
          onHandleColor="#eeeeee"

          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={1}
          width={48}
          className="react-switch"
          id="material-switch"


        />
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

  );
}

export default Navbar;