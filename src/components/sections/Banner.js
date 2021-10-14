import React from "react";

const Banner = ({ children }) => {
    return(
        <>
            <div classname="banner">
                { children }
                
            </div>
        </>
    );
}

export default Banner;