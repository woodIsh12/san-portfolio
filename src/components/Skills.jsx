import React from "react";
import reactLogo from "../icons/science.png";
import cpp from "../icons/c-.png";
import java from "../icons/java.png";
import mongo from "../icons/mongoDB.png";
import node from "../icons/pngegg.png";
import htmlCss from "../icons/code.png";
import Skillbar from "./skillBar";

const Skills = (props)=>{

    let arr = [{logo: reactLogo, percentage: 85, name:"React.js"},
        {logo: cpp, percentage: 65, name:"C++"},
        {logo:htmlCss, percentage: 80, name: "HTML/CSS"},
        {logo:java, percentage: 65, name: "Java"},
        {logo:mongo, percentage:75, name: "MongoDB"},
        {logo:node, percentage: 80, name:"Express/Node.js"}]
    return (
        <>
        <section className="skills">
            <h1>Skill Set</h1>
            <div className="skills-container">
                {arr.map(skill => <Skillbar skill={skill}/>)}
            </div>
        </section>
        </>
    )
};

export default Skills;
