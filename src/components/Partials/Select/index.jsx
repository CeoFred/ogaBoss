import React from 'react'

import Styles from '../Input/_Input.module.css';

export default function Check(props){
    return <div className={Styles.FormGroup}>
    <label className={Styles.FormControlLabel}>{props.label}{props.validation && props.validation.required ? (<span className="text-danger pl-2">*   </span>) : ''}</label>
    <select className={Styles.SelectElement}>
            {props.options.map(op => {
                return (<option value={op.value} key={op.value}>{op.text}</option>)
            })}
        </select>
</div>
}