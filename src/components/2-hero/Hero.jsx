import React from 'react';
import Lottie from "lottie-react";
import laptopAnimation from '../../animation/laptop.json';
import { motion } from "framer-motion"
import './hero.css';
const Hero = () => {
    return (
        <section className='hero flex' id='about_section'>
            <div className="left-section">
                <div className="logo">
                    <motion.img
                        initial = {{transform: "scale(0)"}}
                        animate = {{transform: "scale(1)"}}
                        transition={{damping:7, type:"spring",stiffness:100}}
                        width='100' src="./image/logo.png" alt="" />
                    <span className='icon-verified'></span>
                </div>
                <motion.h1 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2}}
                >
                    software designer, founder, and amateur astronaut.
                </motion.h1>
                <p>i'm hesham ali, a software designer and enterpreneur based in new york city. i'm the founder and CEO of planetaria, where we develop technologies that empwer regular people to explore space on their own terms.</p>
                <div className="links flex">
                    <a href="" className='icon-twitter'></a>
                    <a href="" className='icon-instagram'></a>
                    <a href="" className='icon-github'></a>
                    <a href="" className='icon-linkedin'></a>
                </div>
            </div>
            <div className="right-section">
            <Lottie loop={true} className='lottie' animationData={laptopAnimation} />

            </div>
        </section>
    )
}


export default Hero;