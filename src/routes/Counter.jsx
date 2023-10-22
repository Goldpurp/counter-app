import { useState } from "react";
import { useCount } from "../hooks/useCount";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Input from "../components/Input/Input";

import "../App.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App">
      <div
        style={{
          border: "2px solid rgb(41, 41, 41)",
          padding: "10px 30px",
        }}
      >
        <h1>{count}</h1>
        <div className="CounterWrapper">
          <SecondaryButton
            text={"Increment"}
            onClick={increment}
            disabled={false}
          />
          <SecondaryButton
            text={"Decrement"}
            onClick={decrement}
            disabled={!count}
          />
          <SecondaryButton text={"Reset"} onClick={reset} disabled={false} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <Input value={newCount} onChange={handleOnChange} />
          <SecondaryButton
            text={"Update Count"}
            onClick={handleOnClick}
            disabled={false}
          />
        </div>
        <div>
          <Link to="/">
            {" "}
            <PrimaryButton color="rgb(41, 41, 41)" text={"HomePage"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
