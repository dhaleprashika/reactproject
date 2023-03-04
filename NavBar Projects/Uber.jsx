import React from 'react'
import STYLE from "./uber.module.css";
// import Uber from './Uber';

const Uber =()=>{
    return(
        <div className={STYLE.divBlock}>
        <img src="https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg" alt="" />
            <div className={STYLE.menuBlock}>
                <ul>
                    <li>Whereto</li>

                    <li>Services</li>

                    <li>Account</li>
                </ul>
            </div>
        
        </div>
    )
}

export default Uber