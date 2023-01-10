import React, { useEffect, useRef, useState } from "react";
import resume from "../icons/programming.pdf"
import Footer from "./Fotter";
import AOS from 'aos';





const About = (props)=>{
    useEffect(() => {
        AOS.init();
      }, [])
  
    return (
        <>
      <div data-aos-duration="1100" data-aos="fade-up" ref={props.resume} className="about">
        <div className="skills">
            <h2>Resume</h2>
        </div>
        <div className="content">

        <embed alt="Santiago Resume" src={resume} className="pdfViewer" type="application/pdf" />. 
        </div>
        <Footer/>
        </div>
        </>

    );

};

export default About;