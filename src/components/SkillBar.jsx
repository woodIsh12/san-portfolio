import reactLogo from "../icons/science.png";


const Skillbar = ()=>{
    return (
        <>
        <div className="column">
            <div className="logo-name">
                <img src={reactLogo} className="programmingLogo" />
                <p>React.js</p>
            </div>
            <div className="progressBar">
                <div className="percentageBar"></div>
            </div>
            </div>
        </>
    )
}

export default Skillbar