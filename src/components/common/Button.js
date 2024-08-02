const Button = ({ text, onClick, filled = false }) => {
  return (
    <button
      className="px-4 py-2 border-2 border-tertiary rounded-lg hover:bg-tertiary hover:text-secondary"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
