import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { authorsData } from "./authors.data";
import MetaTags from "../../components/common/MetaTags";

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
          <Image
            layout="intrinsic"
            width={100}
            height={100}
            src={image}
            alt={name}
          />
        </div>
        <div className="authors-card-name">{name}</div>
        <div className="authors-card-details">
          <div className="">{designation}</div>
          <div className="">{education}</div>
        </div>
        <div className="authors-card-socials">
          <div className="authors-card-social">
            <a target="_blank" href={twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="authors-card-social">
            <a target="_blank" href={linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Authors = () => {
  const navigate = useRouter();
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="authors-container">
      <MetaTags
        data={{
          title: "Meet SecureDApp Authors: Blockchain Security Experts",
          desc: "Get to know SecureDApp’s team of blockchain security professionals. Learn from leaders shaping the future of Web3 and cybersecurity innovation.",
          keywords:
            "SecureDApp team, blockchain security experts, Web3 professionals, cybersecurity leaders, blockchain innovation, Web3 security, decentralized applications, SecureDApp authors, blockchain technology, Web3 industry leaders",
          image: "/assets/images/authors/harshajit-sarmah.png",
        }}
      />
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
                  onClick={() => navigate.push(`authors/${author.to}`)}
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
      <Footer />
    </div>
  );
};

export default Authors;
