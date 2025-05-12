import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const yearlyUserStatsData = {
  2023: [
    { month: "Jan", user: 2, provider: 1 },
    { month: "Feb", user: 2, provider: 1 },
    { month: "Mar", user: 3, provider: 2 },
    { month: "Apr", user: 3, provider: 2 },
    { month: "May", user: 4, provider: 1 },
    { month: "Jun", user: 4, provider: 3 },
    { month: "Jul", user: 4, provider: 2 },
    { month: "Aug", user: 3, provider: 2 },
    { month: "Sept", user: 3, provider: 2 },
    { month: "Oct", user: 4, provider: 1 },
    { month: "Nov", user: 4, provider: 2 },
    { month: "Dec", user: 5, provider: 2 },
  ],
  2024: [
    { month: "Jan", user: 3, provider: 2 },
    { month: "Feb", user: 4, provider: 3 },
    { month: "Mar", user: 5, provider: 4 },
    { month: "Apr", user: 6, provider: 3 },
    { month: "May", user: 7, provider: 4 },
    { month: "Jun", user: 8, provider: 5 },
    { month: "Jul", user: 9, provider: 6 },
    { month: "Aug", user: 10, provider: 7 },
    { month: "Sept", user: 11, provider: 8 },
    { month: "Oct", user: 12, provider: 9 },
    { month: "Nov", user: 13, provider: 10 },
    { month: "Dec", user: 14, provider: 11 },
  ],
};

const UsersBarChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const userStatsData = yearlyUserStatsData[selectedYear];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sub_title text-lg font-semibold">
          Total Rent statistics
        </h3>
        <div className="flex items-center space-x-4">
          {/* Legend manually created */}
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-primary">Total Rent</span>
            </div>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm appearance-none pr-8 outline-none"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-gray-500 text-lg" />
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={userStatsData} barSize={10}>
          <CartesianGrid vertical={false} stroke="#757575" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="provider"
            fill="#FD6C23"
            name="Total Rent"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersBarChart;
