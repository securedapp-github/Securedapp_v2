import "./CustomButton.css";

const CustomButton = ({ text, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="sss-custom-button-container">
      <button className="sss-custom-button">{text}</button>
    </div>
  );
};

export default CustomButton;
