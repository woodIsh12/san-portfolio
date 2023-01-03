import React from "react";

const Skills = (props)=>{
    return (
        <>
        <section className="skills">
            <h1>Skill Set</h1>
            <div className="skills-container">
                <div className="column">
                    <p>React.js</p>
                    <div className="progressBar">
                    <div className="percentageBar"></div>
                    </div>
                </div>

                <div className="column">
                    <p>Express.js</p>
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
