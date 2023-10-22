import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryText from "./ErrorboundaryTest";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function Root() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorBoundaryText />}>
        <h1>Lets make it count...</h1>
        <Link to="/counter">
          <PrimaryButton color={"#00135c"} text={"Counter App"} />
        </Link>
        <ErrorTest />
        <Link to="djklsnkldnklsjnkljd">
          {" "}
          <PrimaryButton color={"#00135c"} text={"404 Page"} />
        </Link>
      </ErrorBoundary>
    </>
  );
}
