import { process_params } from "express/lib/router";
import reactLogo from "../icons/science.png";


const Skillbar = (props)=>{
    return (
        <>
        <div className="column">
            <div className="logo-name">
                <h3>{props.skill.name}</h3>
                <p className="percentageNum">{props.skill.percentage}%</p>
                <img src={props.skill.logo} className="programmingLogo" />
            </div>
            <div className="progressBar">
                <div className="percentageBar" style={{width: `${props.skill.percentage}%`}}></div>
            </div>
            </div>
        </>
    )
}

export default Skillbar