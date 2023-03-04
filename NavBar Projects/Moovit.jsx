import React from "react";
import { Component } from "react";
import STYLE from "./moovit.module.css"

class Moovit extends Component{
    render(){
        return
        <>
        <div className={STYLE.divBlock}></div>
        <img src="https://moovit.com/wp-content/uploads/2020/03/opengraph-homepage.png" alt="" />
        <div className={STYLE.menuBlock}>
            <ul>
                <li>
                    Directions
                </li>
                <li>
                    Lines
                </li>
                <li>
                    Alerts
                </li>
            </ul>
        </div>
        </>
    }
}
export default Moovit