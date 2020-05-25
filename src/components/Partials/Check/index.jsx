import React from 'react'

import Styles from '../Input/_Input.module.css';

export default function Check(props){
    return <div>
        <input 
        className={Styles.checkBoxElem}
        type={props.checkType || "checkbox"} 
        disabled={props.disabled || false} />
        <label className={Styles.checkBoxElemLabel}>{props.label}</label>
    </div>
}