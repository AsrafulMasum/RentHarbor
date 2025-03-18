import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";
import Button from "../Button";

const AvailableDateSelector = ({ availableDates = [] }) => {
  console.log("Available Dates:", availableDates);
  const dates = ["2025-10-01", "2025-10-02", "2025-10-03"];

  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Function to disable unavailable dates
  const isDateDisabled = (date) => {
    const dateString = date.toISOString().split("T")[0]; // Format YYYY-MM-DD
    return !(Array.isArray(dates) && dates.includes(dateString));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Select Your Stay</h2>
      <DateRange
        rangeColors={["#FD6C23"]}
        ranges={selectedDates}
        onChange={(item) => setSelectedDates([item.selection])}
        minDate={new Date()} // Prevent past date selection
        disabledDay={isDateDisabled} // Disable unavailable dates
      />
      <Button
        text="Book Now"
        style="btn-wide bg-primary text-white border"
      />
    </div>
  );
};

export default AvailableDateSelector;

// ✅ Prop Validation
AvailableDateSelector.propTypes = {
  availableDates: PropTypes.arrayOf(PropTypes.string).isRequired,
};
