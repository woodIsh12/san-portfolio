import React from "react";

const Intro = (props)=>{
    return (
        <div className="flex items-center justify-center
        flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 
            mb-1 md:3 font-bold">Santiago</h1>
            <p className="text-base md:text-xl 
            mb-3 font-medium">Software Developer</p>
            <p className="text-sm max-w-xl font-bold">This is my entire bio</p>
        </div>
    )
};

export default Intro;