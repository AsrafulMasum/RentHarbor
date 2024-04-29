import { Link, useRouteError } from "react-router-dom";
// import animationData from "../assets/404.json";
// import Lottie from "react-lottie";
import Button from "../Components/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.error.stack);
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div>
      <div className="flex justify-center items-center gap-10">
        <div className="hidden min-h-screen text-center lg:flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">
            <span className="text-quinary">{error.status}</span> ||{" "}
            <span className="text-quinary">Page {error.statusText}</span>
          </h2>
          <p className="text-2xl font-medium">{error.data}</p>

          <Link to={"/"}>
            <Button text="Go Home" style="bg-senary btn-wide text-white hover:text-quinary" />
          </Link>
        </div>
        <div className="text-center flex justify-between">
          {/* <Lottie options={defaultOptions}></Lottie> */}
          <img className="" src="https://amentotech.com/htmls/tenanto/images/404.gif" alt="Error" />
          <Link className="lg:hidden" to={"/"}>
            <Button text="Go Home" style="bg-secondary btn-wide text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
