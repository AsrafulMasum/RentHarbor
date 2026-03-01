import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RentBarChart from "../charts/RentBarChart";
import EarningLineChart from "../charts/EarningLineChart";
import { TbHomeRibbon } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { SlStar } from "react-icons/sl";

const GuestDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const statistics = [
    {
      title: "Total Bookings",
      amount: "28",
      icon: <TbHomeRibbon className="text-3xl text-primary" />,
    },
    {
      title: "Total Spent",
      amount: "18k",
      icon: <GiTakeMyMoney className="text-3xl text-primary" />,
    },
    {
      title: "Reviews Given",
      amount: "20",
      icon: <SlStar className="text-3xl text-primary" />,
    },
    {
      title: "Wishlist Count",
      amount: "20",
      icon: <FcLike className="text-4xl text-primary" />,
    },
  ];

  return (
    <div className="w-full py-10 px-10 max-h-screen overflow-y-auto">
      <div className="grid grid-cols-4 gap-6 h-[120px] mb-4">
        {statistics?.map((statistic) => (
          <div
            key={statistic?.title}
            className="bg-white border rounded-lg p-[25px] flex items-center gap-4 shadow-md"
          >
            <div>{statistic?.icon}</div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-sub_title">
                {statistic?.title}
              </h2>
              <h3 className="text-sub_title text-2xl font-semibold">
                {statistic?.amount}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <RentBarChart />
      <EarningLineChart />
    </div>
  );
};

export default GuestDashboard;
