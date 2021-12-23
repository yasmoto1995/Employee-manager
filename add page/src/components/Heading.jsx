import React from "react";

const Heading = (props) => {
    return(
        <div className={`heading `+ props.className}>
            <h1>{props.title}</h1>
        </div> 
    )
}

export default Heading;
