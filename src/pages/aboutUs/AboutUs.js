import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import teamData from "./team-data";
import TitleDesc from "../../components/common/TitleDesc";

function TeamBox({ details }) {
  return (
    <div>
      <div>
        <img width="120px" src={details.image} />
      </div>
      <div>
        <p>{details.name}</p>
        <span>{details.designation}</span>
        <div>
          <span>
            <Link to={details.twitter}>
              <i className="fa-brands fa-square-x-twitter" />
            </Link>
          </span>
          <span>
            <Link to={details.linkedin}>
              <i className="fa-brands fa-linkedin" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <div>
        <h3>Our Story</h3>
        <p>
          EhyaSpace is the collaboration hub that brings the right people,
          information, and tools together to get work done. From Fortune 100
          companies to corner markets, millions of people around the world use
          Slack to connect their teams, unify their systems, and drive their
          business forward.
        </p>
        <img width="300px" src="/images/about-us.png" />
        <hr />
      </div>
      <div>
        <div>
          <div>
            <img width="300px" src="/images/about-2.png" />
            <img width="300px" src="/images/about-3.svg" />
          </div>
          <TitleDesc
            title="Building the work ecosystem"
            desc="Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API, the Slack platform team works with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Ehya."
          />
        </div>
        <div>
          <div>
            <TitleDesc
              title="Our Company's Work Culture"
              desc="Like Steve Jobs quotes, “Design is not just what it looks like and feels like. Design is how it works”. We always try to make a great output by this culture:"
            />
            <div>
              <div>
                <p>
                  <i className="fa-solid fa-check" />
                  Fast Delivery
                </p>
                <p>
                  <i className="fa-solid fa-check" />
                  Hungry for exploration
                </p>
                <p>
                  <i className="fa-solid fa-check" />
                  Teamwork Always
                </p>
              </div>
              <div>
                <p>
                  <i className="fa-solid fa-check" />
                  Communication is the key
                </p>
                <p>
                  <i className="fa-solid fa-check" />
                  Weekly evaluations
                </p>
                <p>
                  <i className="fa-solid fa-check" />
                  Up to date with the trend
                </p>
              </div>
            </div>
          </div>
          <div>
            <img width="300px" src="/images/about-4.svg" />
          </div>
        </div>
        <div>
          <TitleDesc
            title="Our Team"
            desc="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          />
          <div>
            {teamData.map((i) => (
              <TeamBox details={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
