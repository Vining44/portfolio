import React from "react";
import Banner from "../components/sections/Banner.js";
import TopNav from "../components/sections/TopNav.js";
import Footer from "../components/layout/Footer.js";

const FAQ = () => {
    return(
        <>
            <TopNav/>
            <Banner>
                <div id="questions">
                    Frequently Asked Questions
                </div>
            </Banner>
            <body id="last-page">
                <div className="question-one">
                    What are your aspirations for your life in the future?
                </div>
                <div className="empty"/>
                <div className="answer-one">
                    I would love to be a coach of either basketball or golf. 
                    I also would like to write a book about my own life to hopefully help others through their own tough times. 
                    I just truly want to inspire growth in the human spirit.
                </div>
                <div className="empty-three"/>
                <div className="question-two">
                    How old are you?
                </div>
                <div className="empty-two"/>
                <div className="answer-one">
                    I am 21 despite how old my terminology can be at various moments.
                </div>
                <div className="empty-four"/>
                <div className="question-three">
                    What is one of the single most important moments that has shaped who you are now?
                </div>
                <div className="empty-five"/>
                <div className="answer-three">
                    My birth defect instilled a will to persevere in life. 
                    It has helped me push myself and not give into pressure and conformity. 
                    I strive to be different because differences make the world special.
                </div>
                <div className="empty-six"/>
                <div className="question-four">
                    Why do you want to coach?
                </div>
                <div className="empty-seven"/>
                <div className="answer-four">
                    I want to make a difference in other people's lives. 
                    People need someone they can go to and learn from and I think that I could be that person.
                </div>
                <div className="empty-eight"/>
            </body>

            <Footer/>
        </>
    );
}

export default FAQ;