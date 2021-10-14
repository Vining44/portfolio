import React from "react";
import TopNav from "../components/sections/TopNav.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";

const Connect = () => {
    return(
        <>
            <TopNav/>
            <Banner/>
                <div className="connect">
                    Poems and Thoughts
                </div>
                <body className="text-format">
                    <div className="title-one">
                        Death of a Friend
                    </div>
                    <div className="LLE">
                        Always a brother, Always a friend, Always thought you'd be here till the end. ~KMJV~
                    </div>
                    <div className="title">
                        Who Am I?
                    </div>
                    <div className="poem2">
                        I'm a loner, but I'm not alone.
                        I'm a roamer who has a home.
                        I think a lot, but my mind's at ease.
                        You can call me a ponderer if you please.
                        I spread the love, for that I am proud.
                        I'm not too quiet, nor too loud.
                        I'm not just an average joe you see,
                        But not yet the best that I can be.
                        I'll keep on pushing everyday,
                        for I know one day I'll find my way. ~KMJV~
                    </div>
                    <div className="gap-fill"/>
                    <div className="favorites">
                        Favorite Poems
                    </div>
                    <div className="poem3">
                        If all that I would want to do would be to sit and talk to you... would you listen? ~Ann Ashford~
                    </div>
                    <div className="gap-fill2"/>
                    <div className="poem4">
                        Some say the world will end in fire,
                        Some say in ice.
                        From what I’ve tasted of desire
                        I hold with those who favor fire.
                        But if it had to perish twice,
                        I think I know enough of hate
                        To say that for destruction ice
                        Is also great
                        And would suffice. 
                        ~Robert Frost~
                    </div>
                    <div className="gap-fill3"/>
                    <div className="poem5">
                        We cannot fully appreciate the light without the shadows. 
                        We have to be thrown off balance to find our footing. 
                        It's better to jump than fall. 
                        And here I am. 
                        ~Matthew McConaughey~
                    </div>
                </body>
            <Footer/>
        </>
    );
}

export default Connect;