import React from 'react'
import Reveal from 'react-reveal/Reveal';
import calculator from '../img/Calculator.png'
import card from '../img/Card.png'
import camera from '../img/Camera.png'


const Next = () => {
    return (
        <div className="aboutInfo-sidex">
            <div className="sidex-one">
                <Reveal>
                    <ul>
                        <li><img src={card} alt="" />
                            <h1>Benchmarks</h1>
                            <p>See how you stack up against comparable companies in similar stages.</p>
                        </li>
                        <li><img src={calculator} alt="" />
                        <h1>Pricing Audit</h1>
                            <p>Benchmark the health of your monetization and pricing strategy.</p>
                        </li>
                        <li><img src={camera} alt="" />
                        
                        <h1>Retention Audit</h1>
                            <p>Audit where revenue leakage exists and where you can increase retention.</p></li>   
                    </ul>
                </Reveal>
            </div>
        </div>
    )
}

export default Next
