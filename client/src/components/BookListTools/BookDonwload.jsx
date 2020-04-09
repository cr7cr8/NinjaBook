import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring/';

const BookDownload = ({ whenClick, ...props }) => {


    const [goalWidth, setGoalWidth] = useState("0%")

    const [isDisabled, setIsDisabled] = useState(false)

    const springStyle = useSpring({
        from: { width: "0%" },

        margin: "0", width: goalWidth, paddingLeft: "10px", padding: "0",
        //  background: "linear-gradient(90deg, red 80%, blue 20%)",

        background: "linear-gradient(to right, #4880EC, #019CAD)",
        whiteSpace: "nowrap",
        borderRadius: "4px",

    })


    return (
        <React.Fragment>

            <button disabled={isDisabled}
                style={{ padding: "0", border: "0" }}



                onClick={() => { setIsDisabled(true); whenClick(setGoalWidth); }}
                {...props}
            >

                <animated.div

                    style={springStyle}
                    onClick={function () { setGoalWidth("5%") }}
                >
                    <div style={{
                        paddingLeft: "10px", paddingRight: "10px", wordWrap: "break-word",
                      
                    }}>{props.children}</div>
                </animated.div>
            </button>

        </React.Fragment>
    )
}



export default BookDownload