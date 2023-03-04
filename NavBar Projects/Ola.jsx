import React from 'react'
import STYLE from "./ola.module.css";

const Ola =()=>{
    return(
        <div className={STYLE.divBlock}>
        <img src="https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Emblem.png" alt="" />
            <div className={STYLE.menuBlock}>
                <ul>
                    <li>Search destination</li>

                    <li>Services</li>

                    <li>Account</li>
                </ul>
            </div>
        
        </div>
    )
}

export default Ola