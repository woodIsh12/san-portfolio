import React from "react";
import greyMe from "../icons/whiteBlackMe.jpg"

const Intro = (props)=>{
    return (
        <>
        <section className="intro">
            <div className="container-intro">
                <div className="my-info">
                    <h1>Santiago Londono</h1>
                    <p>I'm an aspiring Software Developer
                        who specializes on writing front-end. 
                        &#40;Though I've written full-stack apps&#41;
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