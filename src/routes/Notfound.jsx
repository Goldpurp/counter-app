import { Link } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function NotFound() {
  return (
    <>
      <h1>404 Error | Invalid route</h1>

      <Link to="/">
        <PrimaryButton color={"#00135c"} text={"HomePage"} />
      </Link>
    </>
  );
}
