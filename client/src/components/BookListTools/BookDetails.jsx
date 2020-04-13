import React, { useContext, useRef, useLayoutEffect, useState, Component } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'

import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import BookDownload from './BookDonwload';
import BookDelete from './BookDelete';

import { UserContext } from '../../contexts/UserContextProvider';

import { Link } from 'react-router-dom';

const BookDetails = ({ book, ...props }) => {

    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)


    const [goalOpa, setGoalOpa] = useState(1)
    const [goalHeight, setGoalHeight] = useState("auto")
    return (<React.Fragment>
        <Spring from={{ opacity: 0, height: 0 }} to={{ opacity: goalOpa, height: goalHeight }} config={{ duration: 300 }} >

            {(props) => {



                return (

                    <li style={props} >

                        <div style={{ height: "5px", opacity: "0" }}></div>

                        <div className={book.finish ? "done" : ""} style={{ paddingLeft: "10px", paddingRight: "0px" }}>
                            {user.username
                                ? <BookDelete {...{ setGoalOpa, setGoalHeight, dispatch, book, props }}>  delete  </BookDelete>  
                                : <div></div>
                            }


                            <span className={book.finish ? "title done" : "title"} style={{ boxShadow: "none" }}    >{book.title}  </span>
                            <div className={book.finish ? "author done" : "author"} >{book.author} </div>

                            {book.files &&

                                <BookDownload
                                    whenClick={(obj) => { dispatch({ type: "downloadFile", id: book.id, obj: obj }) }}
                                    className="btn bar"
                                >
                                    {book.files[0]}
                                </BookDownload>
                            }

                        </div>
                        <div style={{ height: "5px", opacity: "0" }}></div>
                    </li>


                )
            }}
        </Spring>


    </React.Fragment>
    );
}

export default BookDetails;