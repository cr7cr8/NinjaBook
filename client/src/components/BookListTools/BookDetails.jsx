import React, { useContext, useRef, useEffect /*useState*/ } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'



const BookDetails = ({ book }) => {



    useEffect(function () {


        myButton.current.onmouseenter = (e) => { e.currentTarget.parentNode.style = "opacity:0.7;  text-decoration: line-through;" }
        myButton.current.onmouseleave = (e) => { e.currentTarget.parentNode.style = "opacity:1;  text-decoration: none;" }

    }, []);

    var timer = 0;
    var delay = 200;
    var prevent = false;





    const myButton = useRef()
    const { dispatch } = useContext(BookListContext)

    // const [{useOut,mouseEnter,mouseOut}, setPanalStyle] = useState({

    //     useOut:true,
    //     mouseEnter: {
    //         opacity: 0.7,
    //         textDecoration: "line-through"
    //     },

    //     mouseOut: {
    //         opacity: 1,
    //         textDecoration: "none"
    //     }
    // })

    return (

        <li className={book.finish?"done":""} >

            <button className="deleteBtn"

                ref={myButton}
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
                        dispatch({ type: "deleteBook", id: book.id })
                    }
                }


            // onMouseEnter={(e) => { setPanalStyle({useOut:!useOut,mouseEnter,mouseOut}) }}
            // onMouseOut={(e) => { setPanalStyle({useOut:!useOut,mouseEnter,mouseOut}) }}

            //    onMouseEnter={(e) => { e.currentTarget.parentNode.style = "opacity:0.7;  text-decoration: line-through;" }}
            //    onMouseOut={(e) => { e.currentTarget.parentNode.style = "opacity:1;  text-decoration: none;" }}

            >delete</button>

         


            <div className={book.finish?"title done":"title"}>{book.title}  </div>



            <div className={book.finish?"author done":"author"}>{book.author} </div>


        </li>




    );
}

export default BookDetails;