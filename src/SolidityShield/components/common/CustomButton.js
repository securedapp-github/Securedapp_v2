import "./CustomButton.css";

const CustomButton = ({ className, text, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="sss-custom-button-container">
      <button className={`rounded-xl bg-tertiary text-white ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
