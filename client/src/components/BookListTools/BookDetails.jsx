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
    const [picture, setPicture] = useState(null)
    const [picSize, setPicSize] = useState(20)
    const [picName, setPicName] = useState(null)

    useLayoutEffect(() => {
        if (book.picture) {

            dispatch({ type: "downloadPic", id: book.id, setPicture,setPicName })
        }


    }, [])


    return (<React.Fragment>
        <Spring from={{ opacity: 0, height: 0 }} to={{ opacity: goalOpa, height: goalHeight }} config={{ delay: 0, duration: 200, friction: 10 }} >

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

                            {
                                book.picture
                                &&

                                <div style={{ paddingRight: "10px", }}>

                                    <Spring from={{ opacity: 0, width: "0%" }} to={{ opacity: 1, width: picSize + "%" }} config={{ duration: 200 }} >
                                        {(props) => {
                                            return (

                                                <a href={picture} download={picName} style={{cursor:"default"}}>
                                                    <img src={picture} style={{ ...props, borderRadius: "4px" }} /*style={{ width: picSize ? "100%" : "20%", height: "auto" }}*/
                                                        onClick={function (e) {
                                                            e.preventDefault()
                                                            picSize === 20 ? setPicSize(100) : setPicSize(20)


                                                        }} />
                                                </a>
                                            )
                                        }}


                                    </Spring>
                                </div>

                            }


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