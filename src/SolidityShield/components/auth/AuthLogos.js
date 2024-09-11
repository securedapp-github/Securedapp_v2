const AuthLogos = ({ imagePath = "" }) => {
  return (
    <div className="auth-logos-container">
      <div className="auth-logos">
        <img layout="intrinsic" src={imagePath} alt="" />
      </div>
    </div>
  );
};

export default AuthLogos;
