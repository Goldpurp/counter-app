import React from "react";
import s from "./Input.module.css";

const Input = ({ onChange, value }) => {
  return (
    <div className={s.containerInput}>
      <input
        placeholder="Input Value"
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
