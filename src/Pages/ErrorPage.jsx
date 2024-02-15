import { Link, useRouteError } from "react-router-dom";
import animationData from "../assets/404.json";
import Lottie from "react-lottie";
import Button from "../Components/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.error.stack);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-10">
        <div className="hidden min-h-screen text-center lg:flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">
            <span className="text-red-600">{error.status}</span> ||{" "}
            <span className="text-red-600">Page {error.statusText}</span>
          </h2>
          <p className="text-2xl font-medium">{error.data}</p>

          <Link to={"/"}>
            <Button text="Go Home" style="bg-secondary btn-wide" />
          </Link>
        </div>
        <div className="text-center">
          <Lottie options={defaultOptions}></Lottie>
          <Link className="lg:hidden" to={"/"}>
            <Button text="Go Home" style="bg-secondary btn-wide" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
