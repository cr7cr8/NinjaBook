import React, { useContext, useRef, useLayoutEffect, useState, Component } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'

import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import ButtonDownload from './BookDonwload';
import BookDownload from './BookDonwload';


const BookDetails = ({ book, ...props }) => {

    var timer = 0;
    var delay = 200;
    var prevent = false;




    const { dispatch } = useContext(BookListContext)
    const [goalOpa, setGoalOpa] = useState(1)
    const [goalHeight, setGoalHeight] = useState("auto")
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

                        {book.files &&
                            <button className="btn bar" style={{ background: "linear-gradient(to right, #4880EC, #019CAD)", color: "#fff", }} onClick={() => { dispatch({ type: "downloadFile", id: book.id }) }}>


                                {book.files[0]}
                            </button>
                        }
                        {book.files &&
                            <button className="btn bar" style={{ background: "linear-gradient(90deg , #4880EC 0%, #FF9CAD 100%)", color: "#fff", }} onClick={() => { dispatch({ type: "downloadFile", id: book.id }) }}>


                                {book.files[0]}
                            </button>
                        }

                        <br />

                        <button style={{ padding: "0", border: "0" }}    {...props}>
                            <div style={{
                                margin: "0", height: "100", width: "80%", padding: "0",
                                background: "linear-gradient(90deg, #4880EC, #019CAD )", whiteSpace: "nowrap",
                                color: "white",

                                //    background: "linear-gradient(90deg, #e66465, #9198e5 )", whiteSpace: "nowrap"

                            }}>
                                kkkkkkkkkkkkkkkkkkkkkkk
                </div>
                        </button>


                        <br />


                        <button style={{ padding: "0", border: "0", }}    {...props}>
                            <div style={{
                                margin: "0", height: "100", width: "80%", padding: "0",
                          //      background: "linear-gradient(90deg, red 80%, blue 20%)",
                                background: "linear-gradient(90deg , #4880EC 10%, #FF9CAD 90%)",
                                whiteSpace: "nowrap",
                                color:"white"
                                //    background: "linear-gradient(90deg, #e66465, #9198e5 )", whiteSpace: "nowrap"

                            }}>
                                mmmmmmmmmmmmmmmmm
                </div>
                        </button>

<br/>

<button style={{ padding: "0", border: "0", }}    {...props}>
                            <div style={{
                                margin: "0", height: "100", width: "80%", padding: "0",
                                background: "linear-gradient(90deg, red 20%, blue 80%)",
                           
                                whiteSpace: "nowrap",
                                color:"white"
                                //    background: "linear-gradient(90deg, #e66465, #9198e5 )", whiteSpace: "nowrap"

                            }}>
                               zzzzzzz
                </div>
                        </button>





                        {/* <BookDownload/> */}


                    </li>
                )
            }}
        </Spring>
    );
}

export default BookDetails;