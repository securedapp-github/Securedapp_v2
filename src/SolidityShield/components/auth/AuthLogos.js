const AuthLogos = ({ imagePath = "" }) => {
  return (
    <div className="auth-logos-container">
      <div className="auth-logos">
        <img src={imagePath} alt="logo" />
      </div>
    </div>
  );
};

export default AuthLogos;
