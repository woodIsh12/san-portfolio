import { process_params } from "express/lib/router";
import reactLogo from "../icons/science.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Skillbar = (props)=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
        <div className="column" data-aos-duration='700' data-aos={(props.skill.ani == 2) ? "fade-left":"fade-right"}>
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