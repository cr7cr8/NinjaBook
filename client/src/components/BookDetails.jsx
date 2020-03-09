import React, { useContext, /*useState*/ } from 'react';
import { BookContext } from '../contexts/BookContextProvider'

const BookDetails = ({ book }) => {


    const { dispatch } = useContext(BookContext)

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
    
           
            <li>
                <button className="deleteBtn"

                    onClick={() => { dispatch({ type: "removeBook", id: book.id }) }}

                    // onMouseEnter={(e) => { setPanalStyle({useOut:!useOut,mouseEnter,mouseOut}) }}
                    // onMouseOut={(e) => { setPanalStyle({useOut:!useOut,mouseEnter,mouseOut}) }}

                    onMouseEnter={(e) => { e.currentTarget.parentNode.style = "opacity:0.7;  text-decoration: line-through;" }}
                    onMouseOut={(e) => { e.currentTarget.parentNode.style = "opacity:1;  text-decoration: none;" }}

                >delete</button>


                <div className="title">{book.title}  </div>



                <div className="author">{book.author} </div>


            </li>

        


    );
}

export default BookDetails;