import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Authors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { authorsData } from "./authors.data";

const AuthorCard = ({
  image,
  name,
  designation,
  education,
  twitter,
  linkedin,
}) => {
  return (
    <div className="authors-card-container">
      <div className="authors-card">
        <div className="authors-card-image">
          <img src={image} alt={name} />
        </div>
        <div className="authors-card-name">{name}</div>
        <div className="authors-card-details">
          <div className="">{designation}</div>
          <div className="">{education}</div>
        </div>
        <div className="authors-card-socials">
          <div className="authors-card-social">
            <Link to={twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
          <div className="authors-card-social">
            <Link to={linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Authors = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <div className="authors-container">
      <Navbar />
      <div className="authors">
        <div className="authors-header">
          <div className="authors-header-title">Our Authors</div>
          <div className="authors-header-desc">
            We are a technology-driven platform, offering services that cover
            the legal needs of startups and established businesses.
          </div>
        </div>
        <div className="authors-body">
          <div className="authors-body-authors-cards">
            {authorsData.map((author) => {
              return (
                <div
                  onClick={() => navigate(`${author.to}`)}
                  className="authors-body-author-card-container"
                >
                  <AuthorCard
                    image={author.image}
                    name={author.name}
                    designation={author.designation}
                    education={author.education}
                    twitter={author.twitter}
                    linkedin={author.linkedin}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
