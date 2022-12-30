import React, { useState } from "react";
import menu from "../icons/menu.png"

const NavBar = (props)=>{
    const [showMenu, setShowMenu] = useState(false);

    const show = ()=>{
        setShowMenu(!showMenu);
    }
    return (
        <nav>
            <div className={showMenu ?"navBar-show":"navBar"}>
            <ul className="navUnordered">
                <li className="navHome">Home</li>
                <li className="">About</li>
                <li className="">Pojects</li>
                <li className="">Contact</li>
            </ul>
            </div>
            <img onClick={show} className="nav-menu" src={menu}/>
        </nav>
    )
};

export default NavBar;