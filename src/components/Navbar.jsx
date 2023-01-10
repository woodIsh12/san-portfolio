import React, { useRef, useState } from "react";
import menu from "../icons/menu.png"

const NavBar = (props)=>{
    const [showMenu, setShowMenu] = useState(false);
    const show = ()=>{
        setShowMenu(!showMenu);
    }

    return (
        <nav>
            <div ref={props.home} className={showMenu ?"navBar-show":"navBar"}>
            <ul className="navUnordered">
                <li onClick={() => props.scrollToSection(props.home)} className="navHome">Home</li>
                <li onClick={() => props.scrollToSection(props.skills)} className="">Skills</li>
                <li onClick={() => props.scrollToSection(props.projects)} className="">Pojects</li>
                <li onClick={() => props.scrollToSection(props.resume)} className="">Resume</li>
            </ul>
            </div>
            <img onClick={show} className="nav-menu" src={menu}/>
        </nav>
    )
};

export default NavBar;