import React from "react";
import greyMe from "../icons/whiteBlackMe.jpg"

const Intro = (props)=>{
    return (
        <>
        <section className="intro">
            <div className="container-intro">
                <div className="my-info">
                    <h1>Santiago Londono</h1>
                    <p>I'm a Software Developer
                        who specializes on writing full-stack applications.
                        Currently I'm focused on perfecting my express.js and React.js 
                        knowledge, and would like to learn Three.js {"( WebGL seems like so much fun.)"}
                    </p>
                    <button>Contact Me</button>
                </div>
                <div className="imageMe">
                    <img className="greyMe" src={greyMe}/>
                </div>
            </div>
        </section>
        </>
    )
};

export default Intro;