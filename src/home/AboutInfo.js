import React from 'react'
import Reveal from 'react-reveal/Reveal';
import hero from '../img/hero.png'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const AboutInfo = () => {
    return (
        <div className="aboutInfo">
            <div className="side2">
            <img 
                className="myImage" 
                src={hero} 
                alt="my image" 
                />
            </div>
            <div className="side1">
                <Reveal>
                    <h1 className="title">Grow your subscription business</h1>
                    <p className="description">Outcome-centered products that reduce churn, optimize pricing, 
                    and grow your subscription business end-to-end.</p>
                    <a className="get">Get startted </a>  
                </Reveal>
            </div>
        </div>
    )
}

export default AboutInfo
