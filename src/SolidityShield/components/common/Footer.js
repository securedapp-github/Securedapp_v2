import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  const partners = [
    {
      label: "Technology Partner",
      src: "/assets/images/solidity-shield-scan/casper-icon.png",
      alt: "Casper Network",
      width: 48,
      height: 48,
    },
    {
      label: "Sandbox",
      src: "/assets/images/solidity-shield-scan/ifsca-icon.png",
      alt: "IFSCA",
      width: 56,
      height: 56,
    },
    {
      label: "Payments Partner",
      src: "/assets/images/solidity-shield-scan/phonepe-icon.svg",
      alt: "PhonePe",
      width: 40,
      height: 40,
    },
  ];

  return (
    <footer className="sss-footer">
      {partners.map((partner) => (
        <div key={partner.alt} className="sss-footer-partner">
          <p className="sss-footer-label">{partner.label}</p>
          <div className="sss-footer-logo-wrap">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
