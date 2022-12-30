import React from "react";
import greyMe from "../icons/whiteBlackMe.jpg"

const Intro = (props)=>{
    return (
        <>
        <section className="intro">
            <div className="container-intro">
                <div className="my-info">
                    <h1>Santiago Londono</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Sit porro alias fugiat
                        dolor fugit commodi ab optio ducimus soluta
                        rerum. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Exercitationem, laborum?
                        </p>
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