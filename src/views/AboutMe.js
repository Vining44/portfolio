import React from "react";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";
import TopNav from "../components/sections/TopNav.js";

const AboutMe = () => {
    return(
        <>
            <TopNav/>
            <Banner>
                <div id="sample">
                    About Me
                </div>
            </Banner>
                <body id="text-mod">
                    <div id="sample-one">
                        <div id="bubble-one">
                            I was born and raised in Independence, KS.
                        </div>
                        <div id="bubble-two">
                            I went to high school in Caney Valley, KS.
                        </div>
                        <div id="bubble-three">
                            My hobbies include reading, writing, golfing, running, and biking.
                        </div>
                    </div>    
                    <div id="sample-two">
                        <div id="independence">
                        
                        </div>
                        <div id="caney">
                        
                        </div>
                        <div id="golf"/>
                    </div>
                    <div id="filler">

                    </div>
                    <div id="sample-three">
                    
                        <div id="bubble-four">
                            I enjoy writing poetry in my journal as well as just putting my thoughts onto paper.
                        </div>

                        <div id="bubble-five">
                            I love movies and have become fascinated with the filmmaking process.
                        </div>

                        <div id="bubble-six">
                            I also love attending weddings and having a great time with friends.
                        </div>

                    </div>
                    <div id="sample-four">
                        <div id="poems">

                        </div>

                        <div id="movies">
                            
                        </div>

                        <div id="weddings">

                        </div>
                    </div>
                    <div id="filler-two">
                    </div>
                </body>
            <Footer />
        </>
    );
};


export default AboutMe;