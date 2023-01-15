import React, { useEffect, useRef } from "react";
import greyMe from "../icons/whiteBlackMe.jpg"
import AOS from 'aos';




const Intro = (props)=>{

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
        <section ref={props.home} className="intro">
            <div className="container-intro">
                <div data-aos="fade-right" className="my-info">
                    <h1>I'm Santiago Londono</h1>
                    <p>I'm a Software Developer
                        who specializes on writing full-stack applications.
                        Currently I'm focused on coding with express.js and React. 
                        I would like to learn Three.js {"( WebGL seems like so much fun.)"}
                    </p>
                    <button><a href="mailto:slondono.2007@hotmail.com">Contact Me</a></button>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className="imageMe">
                    <img className="greyMe" src={greyMe}/>
                </div>
            </div>
        </section>
        </>
    )
};

export default Intro;