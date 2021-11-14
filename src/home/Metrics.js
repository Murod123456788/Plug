import React, {useState} from 'react'
import Reveal from 'react-reveal/Reveal';
import pose2 from '../img/pose2.png'

const Subscription = () => {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text-one">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide-one">
              {isReadMore ? "...learn more" : " show less"}
            </span>
          </p>
        );
      };
    
    return (
        <div className="metrics">
            <div className="site2">
            <img 
                className="myImage" 
                src={pose2} 
                alt="my image" 
                />
            </div>
            <div className="site-one">
                <Reveal>
                    <h1 className="title-two">In-depth metrics</h1>
                    {/* <p className="description-one">Outcome-centered products that reduce churn, optimize pricing, 
                    and grow your subscription business end-to-end.</p>
                    <a className="get-one">Get started </a>   */}
                    <div className="container">
                    <ReadMore className="description-two">
                    Accurate, real-time reporting at your fingertips. Getting data has never been easier. for you to learn, so thrive
                        and also have fun! Free Tutorials, Millions of Articles, Live, 
                        Online and Classroom Courses ,Frequent Coding Competitions,
                        Webinars by Industry Experts, Internship opportunities, and Job
                        Opportunities. Knowledge is power!
                    </ReadMore>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Subscription
