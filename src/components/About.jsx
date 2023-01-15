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
      <div data-aos-duration="600" data-aos="fade-up" ref={props.resume} className="about">
        <div className="skills">
            <h2>About Me</h2>
        </div>
        <div className="content">
          <p className="aboutParagraph">
            
        <span className="bulb">💡</span>

          <br/>
          I'm Santiago, a Langara College student.
          <br/>
          During my college years I gained the skills needed to design, develop, deploy and maintain
          Software, ranging from beautiful front-end websites, to full-stack applications, working with 
          several moving parts {"(microservices, API's)"}.
          <br/>
          <br/>
          I love the puzzle that software development offers. Not only this,
          but I'm also excited to expand my knowledge by working with like-minded people
          with more experience.
          <br/>
          <br/>
          On a personal level I'd say I'm a someone who is very interested in the world.
          what it has to offer, and how other people perceive it. I enjoy
            philosophy, learning languages, and being outdoors.
          <br/>
          <br/>
          <br/>
        <a className="resumeDownload" href={resume} download>
          <button>Download resume</button>
        </a>        
            
             </p>
        </div>
        <Footer/>
        </div>
        </>

    );

};

export default About;