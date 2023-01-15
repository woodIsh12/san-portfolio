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
          <p style={{color: "white"}}>I'm Santiago, a Langara College student.
          <br/>
          During my college years I gained the skills needed to help design, develop, test and maintain
          Software. Ranging from beautiful front-end websites, to a ful-stack application, working with 
          several moving parts {"( microservices, API's)"}.
          <br/>
          I love the puzzle that software development offers. Not only this,
          but I'm also excited expand my knowledge by working with like-minded people
          with more experience.
          <br/>
          On a personal level I'd say I'm a someone who is very interested in the world.
          what it has to offer, and how other people perceive it. I enjoy
            philosophy, learning languages, and being outdoors. </p>
        <a href={resume} download>
          <button>Download resume</button>
        </a>        
        </div>
        <Footer/>
        </div>
        </>

    );

};

export default About;