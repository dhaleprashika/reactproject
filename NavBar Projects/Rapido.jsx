import React from 'react'
import STYLE from "./rapido.module.css"

const Rapido = () => {
  return (
    <div className={STYLE.divBlock}>
        <img src="https://play-lh.googleusercontent.com/9HyDHKMpf6qa6EPhUbX3qgVmdbCQnkYtQxjoM_GgAaQCBlGY0XJcgYiu5jpnm0nZP6Q" alt="" />
            <div className={STYLE.menuBlock}>
                <ul>
                    <li>MyRides</li>

                    <li>SignIn</li>

                    <li>Setting</li>
                </ul>
            </div>
        
        </div>
    )
}


export default Rapido