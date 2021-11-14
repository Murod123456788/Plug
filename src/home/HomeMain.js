import React from 'react';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';
import AboutInfo from './AboutInfo'
import Next from './Next'
import Subscription from './Subscription'
import Metrics from './Metrics';
import IoPho from './IoPho'
import Future from './Future';
import Cards from './Cards';

const HomeMain = () => {
    return(
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <AboutInfo />
            <Next />
            <Subscription />
            <Metrics />
            <IoPho />
            <Future />
            <Cards />
        </>
    )
}

export default HomeMain;