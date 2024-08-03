import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from "../sections/footer"
import teamData from "./team-data"
import TitleDesc from "../components/title-desc"

function TeamBox({details}) {
return(
    <div>
        <div>
            <img width="120px" src={details.image}/>
        </div>
        <div>
            <p>{details.name}</p>
            <span>{details.designation}</span>
            <div>
                <span><Link to={details.twitter}>
                    <FontAwesomeIcon icon={faSun} />
                </Link></span>
                <span><Link to={details.linkedin}>
                    <FontAwesomeIcon icon={faSun} />
                </Link></span>
            </div>
        </div>
    </div>
)
}

function AboutUs() {

return (
  <div>
    <Navbar/>
    <div>
        <h3>Our Story</h3>
        <p>EhyaSpace is the collaboration hub that brings the right people, information, and tools together to get work done. From Fortune 100 companies to corner markets, millions of people around the world use Slack to connect their teams, unify their systems, and drive their business forward.</p>
        <img width="300px" src='/images/about-us.png'/>
        <hr/>
    </div>
    <div>
        <div>
            <div>
                <img width="300px" src='/images/about-2.png'/>
                <img width="300px" src='/images/about-3.png'/>
            </div>
            <TitleDesc title="Building the work ecosystem" desc="Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API, the Slack platform team works with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Ehya."/>
        </div>
        <div>
            <div>
                <TitleDesc title="Our Company's Work Culture" desc="Like Steve Jobs quotes, “Design is not just what it looks like and feels like. Design is how it works”. We always try to make a great output by this culture:"/>
                <div>
                    <ul>
                        <li>Fast Delivery</li>
                        <li>Hungry for exploration</li>
                        <li>Teamwork Always</li>
                    </ul>
                    <ul>
                        <li>Communication is the key</li>
                        <li>Weekly evaluations</li>
                        <li>Up to date with the trend</li>
                    </ul>
                </div>
            </div>
            <div>
                <img width="300px" src='/images/about-4.png'/>
            </div>
        </div>
        <div>
            <TitleDesc title="Our Team" desc="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."/>
            <div>
                {teamData.map(i => (
                    <TeamBox details={i}/>
                ))}
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
  </div>
);
}

export default AboutUs;
