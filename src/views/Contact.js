import React from "react";
import Banner from "../components/sections/Banner.js";
import TopNav from "../components/sections/TopNav.js";
import Footer from "../components/layout/Footer.js";

const Contact = () => {
    return(
        <>
            <TopNav/>
            <Banner>
                <div className="contact">
                    Contact Me
                </div>
            </Banner>
            <body className="text-edit">
                <div className="body">
                    <div className="heading1">
                        Email Me Here:  
                        kalebvining.kv@gmail.com
                    </div>
                    <div className="phone-number">
                    Call Me At:   
                    (620)205-6923
                    </div>
                </div>
                <div className="space1"/>
                <div className="space2"/>

            </body>
            <Footer/>
        </>
    );
}

export default Contact;