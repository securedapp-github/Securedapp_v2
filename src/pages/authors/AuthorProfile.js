import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { authorsData } from "./authors.data";
import "./AuthorProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AuthorProfile = () => {
  window.scrollTo(0, 0);

  const { url } = useParams();
  const [authorDetail, setAuthorDetail] = useState(
    authorsData.filter((author) => author.to === url)[0]
  );

  useEffect(() => {
    const authorFound = authorsData.filter((author) => author.to === url);
    if (authorFound.length > 0) {
      setAuthorDetail(authorFound[0]);
    }
  }, [authorDetail]);

  return (
    <div className="author-profile-container">
      <Navbar />
      <div className="author-profile">
        {authorDetail.details && (
          <div className="author-profile-body">
            <div className="author-profile-body-image">
              <div className="author-profile-card">
                <div className="author-profile-card-image">
                  <img src={authorDetail.image} alt={authorDetail.name} />
                </div>
                <div className="author-profile-card-name">
                  {authorDetail.name}
                </div>
                <div className="author-profile-card-details">
                  <div className="">{authorDetail.designation}</div>
                  <div className="">{authorDetail.education}</div>
                </div>
                <div className="author-profile-card-socials">
                  <div className="author-profile-card-social">
                    <Link to={authorDetail.twitter}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </div>
                  <div className="author-profile-card-social">
                    <Link to={authorDetail.linkedin}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="author-profile-body-detail">
              {authorDetail.details.map((detail) => {
                return (
                  <div className="author-profile-detail-row">
                    <div className="author-profile-detail-row-header">
                      {detail.title}
                    </div>
                    <div className="author-profile-detail-row-info">
                      {detail.info}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {authorDetail && (
          <div className="author-profile-footer">
            <div className="author-profile-footer-header">{`Expert Services Handled by ${authorDetail.name}`}</div>
            <div className="author-profile-footer-links">
              {authorDetail.expertServices.map((service) => {
                return (
                  <div className="author-profile-footer-link">
                    <Link to={service.to}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      {service.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorProfile;
