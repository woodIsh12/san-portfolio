import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import resume from "../icons/programming.pdf"
import Footer from "./Fotter";



const About = (props)=>{
  
    return (
        <>
      <div className="about">
        <div className="skills">
            <h2>Resume</h2>
        </div>
        <div className="content">

        <embed src={resume} className="pdfViewer" type="application/pdf" />. 
        </div>
        <Footer/>
        </div>
        </>

    );

};

export default About;