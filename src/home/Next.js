import React from 'react'
import Reveal from 'react-reveal/Reveal';
import images1 from '../img/image1.png'
import images2 from '../img/image2.png'
import images3 from '../img/image3.png'
import images4 from '../img/image4.png'
import images from '../img/image5.png'
import { Container } from 'reactstrap';

const Next = () => {
    return (
        <div className="aboutInfo2">
            <div className="sidex">
                <Reveal>
                    <ul>
                        <li><img src={images1} alt="" /></li>
                        <li><img src={images2} alt="" /></li>
                        <li><img src={images3} alt="" /></li>
                        <li><img src={images4} alt="" /></li>
                        <li><img src={images} alt="" /></li>
                    </ul>
                </Reveal>
            </div>
        </div>
    )
}

export default Next
