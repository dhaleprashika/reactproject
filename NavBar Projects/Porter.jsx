import React from 'react'
import STYLE from "./porter.module.css";

const Porter =()=>{
    return(
        <div className={STYLE.divBlock}>
        <img src="https://play-lh.googleusercontent.com/ifvKV9StrsBPTd05njEaBjXy4tZyiEC805VxQH-dcJZCGOHnVCMd5CQex28UUjpLaZ-q" alt="" />
            <div className={STYLE.menuBlock}>
                <ul>
                    <li>CityTempo</li>

                    <li>Packers&Movers</li>

                    <li>Courier</li>
                </ul>
            </div>
        
        </div>
    )
}

export default Porter