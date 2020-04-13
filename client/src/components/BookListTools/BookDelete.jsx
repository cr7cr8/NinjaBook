import React, { useContext, useRef, useLayoutEffect, useState, Component } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'

import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import BookDownload from './BookDonwload';
import { UserContext } from '../../contexts/UserContextProvider';



const BookDelete = ({book,dispatch,setGoalOpa,setGoalHeight,...props}) => {

    var timer = 0;
    var delay = 200;
    var prevent = false;


    return (
        <React.Fragment>


            <button className="deleteBtn"
                onClick={() => {
                    timer = setTimeout(function () {
                        if (!prevent) {
                            dispatch({ type: "toggleStatus", id: book.id })
                        }
                        prevent = false;
                    }, delay);
                }}
                onDoubleClick={
                    () => {
                        clearTimeout(timer);
                        prevent = true;
                        setGoalOpa(0)
                        setGoalHeight(0)
                        dispatch({ type: "deleteBook", id: book.id })


                    }
                }

                onMouseEnter={(e) => { e.currentTarget.parentNode.style = "opacity:0.7;  text-decoration: line-through;  padding-left:10px" }}
                onMouseOut={(e) => { e.currentTarget.parentNode.style = "opacity:1;  text-decoration: none;  padding-left:10px" }}

            >{props.children}</button>



        </React.Fragment>




    );
}

export default BookDelete;