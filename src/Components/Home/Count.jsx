import CountUp from "react-countup";
import { FaHouse, FaUsers } from "react-icons/fa6";
import { FaGlobeAmericas, FaHands } from "react-icons/fa";

const Count = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.postimg.cc/GmP4xSJV/maldwip.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundBlendMode: "overlay",
      }}
      className="py-2 text-white"
    >
      <div className="max-w-screen-xl mx-4 lg:mx-auto my-10 flex justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <FaHouse className="text-5xl text-primary" />
          <div className="text-5xl">
            <CountUp start={0} end={455} duration={2.5} />
          </div>
          <p>Property</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <FaUsers className="text-5xl text-primary" />
          <div className="text-5xl">
            <CountUp start={0} end={250} duration={2.5} />
          </div>
          <p>Happy Client</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <FaHands className="text-5xl text-primary" />
          <div className="text-5xl">
            <CountUp start={0} end={312} duration={2.5} />
          </div>
          <p>Host</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <FaGlobeAmericas className="text-5xl text-primary" />
          <div className="text-5xl">
            <CountUp start={0} end={40} duration={2.5} />
          </div>
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
