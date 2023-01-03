import React from "react";
import reactLogo from "../icons/science.png";
import Skillbar from "./skillBar";

const Skills = (props)=>{

    let arr = [1, 2, 3,4,5,6]
    return (
        <>
        <section className="skills">
            <h1>Skill Set</h1>
            <div className="skills-container">
                {arr.map(logo => <Skillbar/>)}
            </div>
        </section>
        </>
    )
};

export default Skills;
