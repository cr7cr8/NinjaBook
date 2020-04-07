import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring/';

const BookDownload = ({whenClick,...props}) => {


    const [goalWidth, setGoalWidth] = useState("0%")

    const [isDisabled,setIsDisabled]=useState(false)

    const style = useSpring({
        from: { width: "0%" },

        margin: "0", height: "20px", width: goalWidth, paddingLeft: "10px", padding: "0",
        //  background: "linear-gradient(90deg, red 80%, blue 20%)",

        background: "linear-gradient(to right, #4880EC, #019CAD)",
        whiteSpace: "nowrap",

    })


    return (
        <React.Fragment>

            <button disabled={isDisabled}
                style={{ padding: "0", border: "0" }}

           //   onClick={(e)=>{ console.log(e.currentTarget);e.currentTarget.disabled=true; whenClick(setGoalWidth)}}
      
              onClick={()=>{ setIsDisabled(true);  whenClick(setGoalWidth);  }}         
                {...props}
            >

                <animated.div
              
                    style={style}
                  //  onClick={function () { setGoalWidth("100%") }}
                >
                    {props.children}
                </animated.div>
            </button>

        </React.Fragment>
    )
}



export default BookDownload