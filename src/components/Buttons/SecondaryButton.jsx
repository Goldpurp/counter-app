import s from "./SecondaryButton.module.css";

const PrimaryButton = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={s["ui-btn"]} disabled={disabled}>
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
