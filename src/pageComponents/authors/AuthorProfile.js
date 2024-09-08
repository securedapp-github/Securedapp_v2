import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { authorsData } from "./authors.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AuthorProfile = () => {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  const router = useRouter();

  const { url } = router.query;
  const [authorDetail, setAuthorDetail] = useState(
    authorsData.filter((author) => author.to === url)[0]
  );

  useEffect(() => {
    const authorFound = authorsData.filter((author) => author.to === url);
    setAuthorDetail(authorFound[0]);
    console.log(authorFound);
  }, [authorDetail]);

  return (
    <div className="author-profile-container">
      <Navbar />
      <div className="author-profile">
        {authorDetail && (
          <div className="author-profile-body">
            <div className="author-profile-body-image">
              <div className="author-profile-card">
                <div className="author-profile-card-image">
                  <img
                    layout="intrinsic"
                    src={authorDetail.image}
                    alt={authorDetail.name}
                  />
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
                    <a target="_blank" href={authorDetail.twitter}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                  <div className="author-profile-card-social">
                    <a target="_blank" href={authorDetail.linkedin}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
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
                    <a href={service.to}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      {service.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorProfile;
