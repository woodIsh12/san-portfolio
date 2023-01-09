import React, { useRef } from "react";
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
        {logo:node, percentage: 80, name:"Express/Node.js", ani:2},
        {logo:htmlCss, percentage: 80, name: "HTML/CSS", ani:1},
        {logo:mongo, percentage:75, name: "MongoDB", ani:2},
        {logo:java, percentage: 65, name: "Java", ani:1},
        {logo: cpp, percentage: 65, name:"C++", ani:2},]

    let others = [{name:"MySQL", ani:1},
     {name:"Bash", ani:2}, 
     {name:"Git", ani:1},
     {name:"GitHub", ani:2},
      {name:"Python", ani:1},
       {name:"Bootstrap", ani:2},
       {name:"Object Oriented", ani:1},
       {name:"Algorithms", ani:2}]

        useEffect(() => {
            AOS.init();
          }, [])
        
    return (
        <>
        <section ref={props.skills} className="skills" id="skills">
            <h2>Skill Set</h2>
            <div className="skills-container">
                {arr.map(skill => <Skillbar skill={skill}/>)}
            </div>
            <h2>Others . . .</h2> 
            <div className="otherSkills">
                {others.map(other=><div className="column"   data-aos={(other.ani == 2) ? "fade-left":"fade-right"}>
                    <ul>
                        <li>{other.name}</li>
                    </ul>
                </div>)}
            </div>
        </section>
        </>
    )
};

export default Skills;
