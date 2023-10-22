import s from "./PrimaryButton.module.css";

const PrimaryButton = ({ text, color }) => {
  return (
    <div>
      <button className={`${s["learn-more"]}`}>
        <span
          className={s.circle}
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          <span className={`${s.icon} ${s.arrow}`}></span>
        </span>
        <span className={`${s["button-text"]}`}>{text}</span>
      </button>
    </div>
  );
};

export default PrimaryButton;
