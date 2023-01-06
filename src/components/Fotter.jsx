import React from "react";
import linkIcon from "../icons/in.png"
import gitIcon from "../icons/github.png"
import mail from "../icons/mail.png"


const Footer = (props)=>{
    return (
        <section className="fotter">
            <div className="socialMedia"></div>
            <p>Desgined & Built by Santiago Londono</p>
            <img src={linkIcon} className="icon" />
            <img src={mail} className="icon mail" />
            <img src={gitIcon} className="github-icon icon" />
        </section>
    )
};

export default Footer;
