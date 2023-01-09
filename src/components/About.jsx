import React, { useRef, useState } from "react";
import resume from "../icons/programming.pdf"
import Footer from "./Fotter";



const About = (props)=>{
  
    return (
        <>
      <div ref={props.resume} className="about">
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