import React from "react";
import reactLogo from "../icons/science.png";

const Skills = (props)=>{
    return (
        <>
        <section className="skills">
            <h1>Skill Set</h1>
            <div className="skills-container">
                <div className="column">
                    <div className="logo-name">
                    <img src={reactLogo} className="programmingLogo" />
                    <p>React.js</p>
                    </div>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>

                <div className="column">
                    
                <div className="logo-name">
                    <img src={reactLogo} className="programmingLogo" />
                    <p>express.js</p>
                    </div>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>
                <div className="column">
                    <p>MongoDB</p>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>
                <div className="column">
                    <p>HTML/CSS</p>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>
                <div className="column">
                    <p>Java</p>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>
                <div className="column">
                    <p>C++</p>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Skills;
