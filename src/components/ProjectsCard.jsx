import React, { useState,useEffect } from "react";
import AOS from 'aos';





const ProjectsCard = (props)=>{

    const [onProject, setOnProject] = useState(true);

    const changeStyle = ()=>{

        setOnProject(!onProject);
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div data-aos-duration="500" data-aos="zoom-in" onTouchEnd={changeStyle} className="project-col" style={{backgroundImage: `url(${props.info.image})`}}>
        <div onTouchStart={changeStyle} className={onProject ? "layer" : "layerPurple"} >
            <h3>{props.info.name}</h3>
            <p>{props.info.description}
            </p>
        </div>
        </div>
    )
}

export default ProjectsCard;