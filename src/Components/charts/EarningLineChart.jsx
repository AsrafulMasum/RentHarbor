import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const yearlyEarningData = {
  "2023": [
    { month: "Jan", earning: 15000 },
    { month: "Feb", earning: 12000 },
    { month: "Mar", earning: 18000 },
    { month: "Apr", earning: 20000 },
    { month: "May", earning: 25000 },
    { month: "Jun", earning: 30000 },
    { month: "Jul", earning: 35000 },
    { month: "Aug", earning: 40000 },
    { month: "Sept", earning: 45000 },
    { month: "Oct", earning: 50000 },
    { month: "Nov", earning: 55000 },
    { month: "Dec", earning: 60000 },
  ],
  "2024": [
    { month: "Jan", earning: 10000 },
    { month: "Feb", earning: 8000 },
    { month: "Mar", earning: 7000 },
    { month: "Apr", earning: 7500 },
    { month: "May", earning: 10000 },
    { month: "Jun", earning: 13000 },
    { month: "Jul", earning: 18000 },
    { month: "Aug", earning: 23000 },
    { month: "Sept", earning: 26000 },
    { month: "Oct", earning: 25000 },
    { month: "Nov", earning: 22000 },
    { month: "Dec", earning: 14000 },
  ],
};

const EarningLineChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const earningData = yearlyEarningData[selectedYear];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sub_title text-lg font-semibold">Monthly Earning</h3>
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
            <FaChevronDown className="text-gray-500 text-sm" />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={earningData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line
            type="monotone"
            dataKey="earning"
            stroke="#AFDA8E"
            strokeWidth={2}
            dot={{ fill: "#222", r: 5 }}
          >
            <LabelList
              dataKey="earning"
              position="top"
              formatter={(value) => `$${(value / 1000).toFixed(1)}k`}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningLineChart;