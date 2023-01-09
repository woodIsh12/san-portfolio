import React, { useRef } from "react";
import movierIMG from "../icons/movier400.png"
import shareIMG from "../icons/shareThou800.png"
import carloIMG from "../icons/monteCarlo.png"
import weatherIMG from "../icons/resizedLoc.png"
import portfolioIMG from "../icons/portfolioIMG.png"
import ProjectsCard from "./ProjectsCard";

let projectsInfo = [
    {name:"Movier", 
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe laudantium aperiam neque dolores alias provident quisquam natus, optio aliquam!",
    image: movierIMG},
    {name:"shareThou",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe laudantium aperiam neque dolores alias provident quisquam natus, optio aliquam!",
    image:shareIMG},
    {name:"MonteCarlo",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe laudantium aperiam neque dolores alias provident quisquam natus, optio aliquam!",
    image: carloIMG},
    {name:"Weather App",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe laudantium aperiam neque dolores alias provident quisquam natus, optio aliquam!",
    image:weatherIMG},
    {name:"This Portfolio",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat saepe laudantium aperiam neque dolores alias provident quisquam natus, optio aliquam!",
    image:portfolioIMG}

];


const Projects = (props)=>{
    const services = useRef(null);
    return (
        <>
        <div ref={props.projects}  className="skills">
            <h2>Projects</h2>
        </div>
        <section className="projects-container">
            <div className="row">
            {projectsInfo.map(project=>
            <ProjectsCard info={project} />)}
            </div>
        </section>
        </>
    )
};

export default Projects;