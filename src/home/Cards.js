import React from 'react'
import { CardGroup, Card, CardBody, CardTitle, CardSubTitle, CardText, Button  } from 'reactstrap'

const Cards = () => {
    return (
        <>
            <div className="cards">
            <ul className="first">
                <li className="point">
                    <CardBody>
                       <h5>Starter</h5>
                       <h1>Free</h1>
                       <ul className="secondary">
                           <li>1 Website</li>
                           <li>5 Gb Hosting</li>
                           <li className="limit">Limited Support</li>
                       </ul>
                       <a  className="price" href="">Get Started</a>
                    </CardBody>
                </li>
                <li className="point">
                    <CardBody>
                       <h5>Starter</h5>
                       <h1>Free</h1>
                       <ul className="secondary">
                           <li>1 Website</li>
                           <li>5 Gb Hosting</li>
                           <li className="limit">Limited Support</li>
                       </ul>
                       <a  className="price" href="">Get Started</a>
                    </CardBody>
                </li>
                <li className="point">
                    <CardBody>
                       <h5>Starter</h5>
                       <h1>Free</h1>
                       <ul className="secondary">
                           <li>1 Website</li>
                           <li>5 Gb Hosting</li>
                           <li className="limit">Limited Support</li>
                       </ul>
                       <a  className="price" href="">Get Started</a>
                    </CardBody>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Cards
