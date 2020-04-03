import React, { useContext, useRef, useLayoutEffect, useState, Component } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider'

import { Spring } from 'react-spring/renderprops';

import { useSpring, animated } from 'react-spring/';


const BookButton = ({ style, children, ...props }) => {
    const [goalWidth, setGoalWidth] = useState("20%")

    const springWidth = useSpring({
        from: { width: "0%" },
      
        margin: "0", height: "100", width: goalWidth, padding: "0",
        background: "linear-gradient(90deg, red 80%, blue 20%)", 
        whiteSpace: "nowrap"
    })

    

    return (
        <React.Fragment >

            <button 
            onClick={function () {setGoalWidth("100%")}} 
            
            
            
            style={{ padding: "0", border: "0", ...style }}    {...props}>


                <animated.div
                    style={
                    springWidth  
                    }>


                    {children}
                </animated.div>


            </button >
            <br />

            <button style={{ padding: "0", border: "0", ...style }}    {...props}>
                <div style={{
                    margin: "0", height: "100", width: "80%", padding: "0",
                    background: "linear-gradient(90deg, #e66465, #9198e5 )", whiteSpace: "nowrap"
                }}>
                    {children}
                </div>
            </button>





        </React.Fragment>



    );
}

export default BookButton;