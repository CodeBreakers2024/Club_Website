import React from 'react';
import logo from '../Assets/tcblogo.jpg';
import Style from "../Stylesheets/Navbar.module.css"
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Ham from './Ham';

const NavBar = () => {

    const breakPoint = 1000;

    return(
        <header>
            <div className={Style.headContent}>
                <div className={Style.logoCont}>
                    <div className={Style.logo}>
                        <img src={logo} alt="tcblogo" />
                        <span className={Style.img_text}> TheCodeBreakers </span>
                    </div>
                </div>

                <MediaQuery minWidth={breakPoint}>
                <nav className={Style.visibleOnLargeScreen}>
                    <ul className={Style.list}>
                        <li><Link to={"/"} className={Style.active}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/achievements"}>Achievements</Link></li>
                        <li><Link to={"/events"}>Events</Link></li>
                        <li><Link to={"/resources"}> Resources </Link></li>
                    </ul>
                </nav>   
                </MediaQuery>

                <MediaQuery maxWidth={breakPoint}>
                    <Ham />
                </MediaQuery>
            

            </div>
        </header>
    )
}


export default NavBar;