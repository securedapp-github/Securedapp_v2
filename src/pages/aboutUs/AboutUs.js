import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import teamData, { companyCulture } from "./about-us-data";
import "./AboutUs.css";
import CustomHr from "../../components/common/CustomHr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ details }) => {
  return (
    <div className="team-card">
      <div className="team-card-header">
        <div className="team-card-header-image-container">
          <img className="team-card-header-image" alt="" src={details.image} />
        </div>
      </div>
      <div className="team-card-body">
        <div className="team-card-body-name">{details.name}</div>
        <div className="team-card-body-designation">{details.designation}</div>
        <div className="team-card-body-socials">
          <Link to={details.linkedin}>
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </Link>
          <Link to={details.twitter}>
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <div className="about-us">
        <div className="about-us-hero-container">
          <div className="about-us-hero">
            <div className="about-us-hero-title">Our Story</div>
            <div className="about-us-hero-description">
              EhyaSpace is the collaboration hub that brings the right people,
              information, and tools together to get work done. From Fortune 100
              companies to corner markets, millions of people around the world
              use Slack to connect their teams, unify their systems, and drive
              their business forward.
            </div>
            <div className="about-us-hero-image">
              <img src="/assets/images/about-us-story.svg" alt="" />
            </div>
            <hr />
          </div>
        </div>
        <div className="about-us-divider">
          <CustomHr />
        </div>
        <div className="about-us-company">
          <div className="about-us-company-eco">
            <div className="about-us-company-eco-image">
              <img src="/assets/images/about-us-story.svg" alt="" />
            </div>
            <div className="about-us-company-eco-content-container">
              <div className="about-us-company-eco-content">
                <div className="about-us-company-eco-content-header">
                  Building the work ecosystem
                </div>
                <div>
                  Connect your conversations with the tools and services that
                  you use to get the job done. With over 1,500 apps and a robust
                  API, the Slack platform team works with partners and
                  developers globally to build apps and integrations that
                  streamline your work, automate mundane tasks and bring context
                  into your conversations in Ehya.
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-company-culture">
            <div className="about-us-company-culture-content-container">
              <div className="about-us-company-culture-content">
                <div className="about-us-company-culture-content-title">
                  <div className="about-us-company-culture-content-title-top">
                    Our Work
                  </div>
                  <div className="about-us-company-culture-content-title-bottom">
                    Culture Company's
                  </div>
                </div>
                <div className="about-us-company-culture-content-description">
                  Like Steve Jobs quotes, “Design is not just what it looks like
                  and feels like. Design is how it works”. We always try to make
                  a great output by this culture:
                </div>
                <div className="about-us-company-culture-content-points">
                  {companyCulture.map((item) => {
                    return (
                      <div className="about-us-company-culture-content-point">
                        <div>
                          <img
                            src="/assets/images/green-tick.svg"
                            alt="green tick"
                          />
                        </div>
                        <div>{item}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" about-us-company-culture-image">
              <img src="/assets/images/about-us-culture.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="about-us-team">
          <div className="about-us-team-header">
            <div className="about-us-team-header-title">Our Team</div>
            <div className="about-us-team-header-description">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
          </div>
          <div className="about-us-team-cards">
            {teamData.map((data) => (
              <TeamCard details={data} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
