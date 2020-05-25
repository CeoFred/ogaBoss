import React from 'react'
import Input from '../../components/Partials/Input/Input'
import Button from '../../components/Partials/Button/Button'
import Check from '../../components/Partials/Check/index';

import Styles from './styles.module.css';

export default function Login(props){
    return (<div className={Styles.container}>
        <div className={Styles.AuthColLeft}>
            <div className={Styles.LogoContainer}>
                <span className={Styles.LogoText}>OGABOSS</span>
            </div>

            <span className={Styles.AuthTypeText}>Login</span>
            <div className={Styles.LoginCaption}>
            Welcome back!
            <br/>
            Find out the sweetest <i>Abacha</i> join in
            <br/>
            Enugu 
            </div>
        </div>

        <div className={Styles.AuthColRight}>
        <form className={Styles.FormContainerFluid}>
            <Input shouldDisplay label="Username" type="text" />
            <Input shouldDisplay label="Password" style={{marginBottom:0}} type="password" />
          <div style={{marginBottom:'60px',marginTop:'6px'}}>
          <Check type="checkbox" label="Remember me"/> 
          </div>
            <Button text="Login" variant="primary" type="button" block/>
        </form>
        </div>
    </div>)
}