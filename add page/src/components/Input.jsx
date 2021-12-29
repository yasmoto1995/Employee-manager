import React from "react";

const Input = (props) => {
    return(
        <div className={`form-group ` + props.groupClassName} >
            <label htmlFor={props.name} className={props.labalClassName}>{props.label}</label>
            <input  className={`form-control ` + props.inputClassName}
                    id={props.name} 
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.handleBlur}
                    required={props.required}
                    disabled={props.disabled}
                    autoFocus={props.autofocus}
            />
        </div>
    );
}

export default Input;
