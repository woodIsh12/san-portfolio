import React from "react";
import reactLogo from "../icons/science.png";
import cpp from "../icons/c-.png";
import java from "../icons/java.png";
import mongo from "../icons/mongoDB.png";
import node from "../icons/pngegg.png";
import htmlCss from "../icons/code.png";
import Skillbar from "./skillBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skills = (props)=>{

    let arr = [{logo: reactLogo, percentage: 85, name:"React.js", ani:1},
        {logo: cpp, percentage: 65, name:"C++", ani:2},
        {logo:htmlCss, percentage: 80, name: "HTML/CSS", ani:1},
        {logo:java, percentage: 65, name: "Java", ani:2},
        {logo:mongo, percentage:75, name: "MongoDB", ani:1},
        {logo:node, percentage: 80, name:"Express/Node.js", ani:2}]

    let others = ["MySQL", "Bash", "Git", "GitHub", "Python", "Bootstrap"]
        useEffect(() => {
            AOS.init();
          }, [])
        
    return (
        <>
        <section className="skills">
            <h1>Skill Set</h1>
            <div className="skills-container">
                {arr.map(skill => <Skillbar skill={skill}/>)}
            </div>
            <h1>Others . . .</h1> 
            <div className="otherSkills">
                {others.map(other=><div className="column">
                    <ul>
                        <li>{other}</li>
                    </ul>
                </div>)}
            </div>
        </section>
        </>
    )
};

export default Skills;
