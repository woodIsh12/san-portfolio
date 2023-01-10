import React, { useEffect, useRef } from "react";
import movierIMG from "../icons/movier400.png"
import shareIMG from "../icons/shareThou800.png"
import carloIMG from "../icons/monteCarlo.png"
import weatherIMG from "../icons/resizedLoc.png"
import portfolioIMG from "../icons/portfolioIMG.png"
import ProjectsCard from "./ProjectsCard";
import AOS from 'aos';



let projectsInfo = [
    {name:"Movier", 
    description:"Front-end website that uses the OMDB API to retrieve different movies, it gives the user the option to make reviews any movie. It also has a built-in save movies you want to watch in the future. ",
    image: movierIMG},
    {name:"shareThou",
    description:"Full stack application that use the MERN stack. It works as a blog, you can make posts once you're registered. And other users can view and react to yours posts.",
    image:shareIMG},
    {name:"MonteCarlo",
    description:"Visual representation of how PI is calculated using the monte carlo technique. This consists of dropping a random number of dots on a square that has a inscribed circle. The ratio between the dots in the square and the circle is pi.  ",
    image: carloIMG},
    {name:"Weather App",
    description:"This weather app uses the OpenWeatherAPI, and the unsplash api to deliver the weather information of any given city. Plus a photo taken there. Besides this it uses brower tools to get the user's location, and show the information.",
    image:weatherIMG},
    {name:"This Portfolio",
    description:"This portfolio uses React HTML and CSS.",
    image:portfolioIMG}

];


const Projects = (props)=>{
    useEffect(() => {
        AOS.init();
      }, [])
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