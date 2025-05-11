import { Link, useRouteError } from "react-router-dom";
import animationData from "../assets/404.json";
import Button from "../Components/Button";
import Lottie from "react-lottie";

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
      <div className="flex justify-center items-center px-5">
        <div className="min-h-screen max-h-screen text-center flex flex-col justify-center items-center gap-4">
          <Lottie options={defaultOptions}></Lottie>

          <h2 className="text-4xl font-bold">
            <span className="text-primary">{error.status}</span> ||{" "}
            <span className="text-primary">Page {error.statusText}</span>
          </h2>
          <p className="text-2xl font-medium">{error.data}</p>
          <Link to={"/"}>
            <Button
              text="Go Home"
              style="bg-primary btn-wide text-white hover:text-primary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
