import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import RentBarChart from "../charts/RentBarChart";
import EarningLineChart from "../charts/EarningLineChart";


const GuestDashboard = () => {
      const { user } = useContext(AuthContext);
      console.log(user);
    
      const statistics = [
        {
          title: "Total Earnings",
          amount: "28K",
          icon: <BsGraphUpArrow className="text-3xl text-primary" />,
        },
        {
          title: "Total Properties",
          amount: "18",
          icon: <IoHomeOutline className="text-3xl text-primary" />,
        },
        {
          title: "Host from",
          amount: "20 days",
          icon: <IoIosTimer className="text-4xl text-primary" />,
        },
      ];

  return (
        <div className="w-full py-10 px-10 max-h-screen overflow-y-auto">
        <div className="grid grid-cols-3 gap-6 h-[120px] mb-4">
          {statistics?.map((statistic) => (
            <div
              key={statistic?.title}
              className="bg-white border rounded-lg p-[25px] flex items-center gap-8 shadow-md"
            >
              <div>{statistic?.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-sub_title">
                  {statistic?.title}
                </h2>
                <h3 className="text-sub_title text-3xl font-semibold">
                  {statistic?.amount}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <RentBarChart />
        <EarningLineChart />
      </div>
  )
}

export default GuestDashboard