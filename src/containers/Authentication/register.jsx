import React from 'react'

import Select from '../../components/Partials/Select/index'
import Input from '../../components/Partials/Input/Input'
import Button from '../../components/Partials/Button/Button'

import Styles from './styles.module.css';

export default function Register(props){
    return (<div className={Styles.container}>
        <div className={Styles.AuthColLeft}>
            <div className={Styles.LogoContainer}>
                <span className={Styles.LogoText}>OGABOSS</span>
            </div>

            <span className={Styles.AuthTypeText}>Sign Up</span>
            <div className={Styles.Caption}>
            Get started in seconds.
            Discover the best businesses in
            Abuja
            </div>
        </div>

        <div className={Styles.AuthColRight}>
        <form className={Styles.FormContainerFluid}>
            <Input shouldDisplay label="Full Name" type="text"/>
            <Input shouldDisplay label="Username" type="text" />
            <Input shouldDisplay label="Email Address" type="email" />
            <Input shouldDisplay label="Phone Number" type="text" />
            
            <Select  label="Gender" options={[{text:'Male',value:'male'},{ text:'Female',value:'female'}]} />
            <div className={Styles.FormRow}>
                <div className={Styles.FormCol6} style={{marginRight:'10px'}}>
                <Input shouldDisplay label="Password" type="password" />

                </div>
                <div className={Styles.FormCol6} style={{marginLeft:'10px'}}>
                <Input shouldDisplay label="Confirm Password" type="password" />

                </div>
            </div>
            
            <Button text="Sign up" variant="primary" type="button" block/>
        </form>
        </div>
    </div>)
}