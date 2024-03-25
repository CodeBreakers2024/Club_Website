import React from 'react';
// import ReactDOM from 'react-dom/client';
import Style from "../Stylesheets/Ham.module.css"
import { Link } from 'react-router-dom';

const Ham = () => {
    const toggleHam = () => {
        const hambtn = document.getElementsByClassName(Style.hamBtn)[0];
        const menu = document.getElementsByClassName(Style.list)[0];
        hambtn.classList.toggle(Style.cross);
        if (hambtn.getAttribute('isopen') === 1) {
            hambtn.setAttribute('isopen', '0');
            menu.style.transform = 'translateX(0)';
        } 
        else {
            hambtn.setAttribute('isopen', '1');
            menu.style.transform = 'translateX(100vw)';
        }
    }
    return (
        <>
            <div className={Style.hamBtnContainer}>
                <div class={Style.hamBtn} onClick={toggleHam} isopen={1}>
                    <span class={Style.bar}></span>
                    <span class={Style.bar}></span>
                    <span class={Style.bar}></span>
                </div>
            </div>

            <div className={Style.hamContainer}>
                <nav >
                    <ul className={Style.list}>
                        <li><Link to={"/"} className={Style.active}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/achievements"}>Achievements</Link></li>
                        <li><Link to={"/events"}>Events</Link></li>
                        <li><Link to={"/resources"}> Resources </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Ham;