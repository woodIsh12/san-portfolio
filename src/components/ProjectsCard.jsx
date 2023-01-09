import React, { useState,useEffect } from "react";




const ProjectsCard = (props)=>{

    const [onProject, setOnProject] = useState(true);

    const changeStyle = ()=>{

        setOnProject(!onProject);
    }
    return(
        <div onTouchEnd={changeStyle} className="project-col" style={{backgroundImage: `url(${props.info.image})`}}>
        <div onTouchStart={changeStyle} className={onProject ? "layer" : "layerPurple"} >
            <h3>{props.info.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quaerat saepe laudantium
                aperiam neque dolores alias provident quisquam
                natus, optio aliquam!
            </p>
        </div>
        </div>
    )
}

export default ProjectsCard;