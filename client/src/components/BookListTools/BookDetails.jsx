import React, { useContext, useRef, useLayoutEffect, useState, Component } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'

import { Spring } from 'react-spring/renderprops';



import { useSpring, animated } from 'react-spring';
const BookDetails = ({ book, ...props }) => {

    var timer = 0;
    var delay = 200;
    var prevent = false;

    const { dispatch } = useContext(BookListContext)
const [goalOpa,setGoalOpa] = useState(1)
const [goalHeight,setGoalHeight] = useState("auto")
    return (
         <Spring from={{ opacity: 0, height: 0 }} to={{ opacity: goalOpa, height: goalHeight }}  >
 
            {(props) => {
                return (
                    <li className={book.finish ? "done" : ""} style={props} >

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

                            onMouseEnter={(e) => { e.currentTarget.parentNode.style = "opacity:0.7;  text-decoration: line-through;" }}
                            onMouseOut={(e) => { e.currentTarget.parentNode.style = "opacity:1;  text-decoration: none;" }}

                        >delete</button>

                  
                                    <div className={book.finish ? "title done" : "title"} >{book.title}  </div>

                                    <div className={book.finish ? "author done" : "author"} >{book.author} </div>
                         
                       

                   


                    </li>
                )
            }}
        </Spring>
    );
}

export default BookDetails;