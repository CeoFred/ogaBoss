/* eslint-disable react/prop-types */
import React from 'react';
import Styles from './_Input.module.css'

const Input = (props) => {
 
if (props.shouldDisplay) {
        return <div className={Styles.FormGroup} 
        style={props.style}
        >
            <label className={Styles.FormControlLabel}>{props.label}{props.validation && props.validation.required ? (<span className="text-danger pl-2">*   </span>) : ''}</label>
            <div className="input-group">
            <input 
            type={props.type} 
            onChange={props.changed} 
            value={props.value}
            required={props.required}
            placeholder={props.placeholder}
            className={Styles.InputElement}
            />
            </div>
        </div>
    } else return (<React.Fragment></React.Fragment>)
};

export default Input;