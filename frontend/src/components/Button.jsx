import React from "react";

const Button = (props) => {
    return (
        <button className={`btn btn-primary ` +  props.className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;