import React from "react";
import {Link} from "react-router-dom"

const TopNav = () => {
    return(
        <>
            <div id="top-nav">

                <Link to="/portfolio">Home</Link>
                <Link to="/portfolio/AboutMe">AboutMe</Link>
                <Link to="/portfolio/MoreInformation">My Inspiration</Link>
                <Link to="/portfolio/Connect">Poetry</Link>
                <Link to="/portfolio/FAQ">FAQ</Link>
                <Link to="/portfolio/Contact">Contact</Link>
            </div>


        </>
    );    
};

export default TopNav;