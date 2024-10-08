import React from 'react';
import logo from '../Assets/tcblogo.jpg';
import Style from "../Stylesheets/Navbar.module.css"
import { Link ,useLocation} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useState , useEffect} from 'react';
import Ham from './Ham';

const NavBar = () => {
    const path = useLocation()
    const [text , setText] = useState('TheCodeBreakers');
    const breakPoint = 1000;

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(max-width: 480px)").matches) {
                setText('TCB');
            } else {
                setText('TheCodeBreakers');
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
        


    return(
        <header className={Style.header}>
                <div className={Style.logo}>
                    <img src={logo} alt="tcblogo" />
                    <span className={Style.img_text}>{text}</span>
                </div>

                <MediaQuery minWidth={breakPoint}>
                <nav className={Style.visibleOnLargeScreen}>
                    <ul className={Style.list}>
                        <li><Link to={"/"} className={path.pathname=="/" ? Style.active : ""}>Home</Link></li>
                        <li><Link to={"/about"} className={path.pathname=="/about" ? Style.active : ""}>About</Link></li>
                        <li><Link to={"/achievements"} className={path.pathname=="/achievements" ? Style.active : ""}>Achievements</Link></li>
                        <li><Link to={"/events"} className={path.pathname=="/events" ? Style.active : ""}>Events</Link></li>
                        <li><Link to={"/resources"} className={path.pathname=="/resources" ? Style.active : ""}> Resources </Link></li>
                        <li><Link to={"/register"} className={path.pathname=="/register" ? Style.active : ""}> Register </Link></li>
                    </ul>
                </nav>   
                </MediaQuery>

                <MediaQuery maxWidth={breakPoint}>
                    <Ham />
                </MediaQuery>

        </header>
    )
}


export default NavBar;