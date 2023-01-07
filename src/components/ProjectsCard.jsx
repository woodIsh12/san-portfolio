import React, { useState } from "react";




const ProjectsCard = (props)=>{

    const [onProject, setOnProject] = useState(true);

    const styleOnClick = {
        backgroundColor: "#0e0074b7",
    }

    const changeStyle = ()=>{
        setOnProject(!onProject);
    }
    return(
        <div className="project-col" style={{backgroundImage: `url(${props.info.image})`}}>
        <div onClick={changeStyle} className={onProject ? "layer" : "layerPurple"} >
            <h3>Movier</h3>
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