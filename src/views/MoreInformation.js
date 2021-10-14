import React from "react";
import Banner from "../components/sections/Banner.js";
import TopNav from "../components/sections/TopNav.js";
import Footer from "../components/layout/Footer.js";

const MoreInformation = () => {
    return(
        <>
            <TopNav/>
            <Banner>
                <div className="inspiration">
                    My Inspiration
                </div>
            </Banner>
            <body className="setup">
                <div className="roy-name">
                    Roy Williams
                </div>
                <div className="roy-linear">
                    <div className="roy-image">
                    
                    </div>
                    <div className="roy-facts">
                        Williams coached for the Kansas Jayhawks for 15 seasons and coached for the North Carolina Tar Heels for 18 seasons.
                        He has won 3 national titles and 18 conference regular-season titles.
                        Williams also has seven conference postseason titles and Nine Final Four appearances. Williams is also a member of the Naismith Memorial Basketball Hall of Fame.

                    </div>
                </div>
                <div className="roy-info">
                    I have always loved Roy Williams as he is my favorite basketball coach of all time. His suits stood out to me, his philosophies resonated within me, and he truly opened my eyes to what you can accomplish with hard work. 
                </div>
            </body>
            <Footer/>
        </>
    );
}

export default MoreInformation;