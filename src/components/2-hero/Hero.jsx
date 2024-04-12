import React from 'react';
import './hero.css';
const Hero = () => {
    return (
        <section className='hero flex' id='about_section'>
            <div className="left-section">
                <div className="logo">
                    <img width='100' src="./logo.png" alt="" />
                    <span className='icon-verified'></span>
                </div>
                <h1>software designer, founder, and amateur astronaut.</h1>
                <p>i'm hesham ali, a software designer and enterpreneur based in new york city. i'm the founder and CEO of planetaria, where we develop technologies that empwer regular people to explore space on their own terms.</p>
                <div className="links flex">
                    <a href="" className='icon-twitter'></a>
                    <a href="" className='icon-instagram'></a>
                    <a href="" className='icon-github'></a>
                    <a href="" className='icon-linkedin'></a>
                </div>
            </div>
            <div className="right-section border">animation</div>
        </section>
    )
}


export default Hero;