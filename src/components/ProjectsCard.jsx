import React from "react";

const ProjectsCard = (props)=>{
    return(
        <div className="project-col" style={{backgroundImage: `url(${props.info.image})`}}>
        <div className="layer">
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