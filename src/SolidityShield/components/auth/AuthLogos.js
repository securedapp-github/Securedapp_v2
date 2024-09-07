import "./AuthLogos.module.css";

const AuthLogos = ({ imagePath = "" }) => {
  return (
    <div className="auth-logos-container">
      <div className="auth-logos">
        <Image
          layout="intrinsic"
          width={100}
          height={100}
          src={imagePath}
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthLogos;
