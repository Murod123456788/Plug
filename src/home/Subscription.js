import React, {useState} from 'react'
import Reveal from 'react-reveal/Reveal';
import heros from '../img/glass.png'

const Subscription = () => {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...learn more" : " show less"}
            </span>
          </p>
        );
      };
    
    return (
        <div className="aboutInfo-two">
            <div className="site2">
            <img 
                className="myImage" 
                src={heros} 
                alt="my image" 
                />
            </div>
            <div className="site1">
                <Reveal>
                    <h1 className="title-one">Grow your subscription business</h1>
                    {/* <p className="description-one">Outcome-centered products that reduce churn, optimize pricing, 
                    and grow your subscription business end-to-end.</p>
                    <a className="get-one">Get started </a>   */}
                    <div className="container">
                    <ReadMore className="description-one">
                        A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.and quizzes. 
                        It provides a variety of services for you to learn, so thrive
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
