import { useState } from "react";
import PrimaryButton from "./components/Buttons/PrimaryButton";

import "./ErrorBoundary.css";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Oh... wow, there is an error somewhere in the react tree");
  }
  return (
    <div onClick={() => setHasError(true)}>
      <PrimaryButton text="Error test" color="purple" />
    </div>
  );
}

export default ErrorTest;
