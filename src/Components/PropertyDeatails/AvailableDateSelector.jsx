import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";

const AvailableDateSelector = ({ availableDates = [] }) => {
  console.log("Available Dates:", availableDates);
  const dates = [
    '2025-10-01', '2025-10-02', '2025-10-03'
  ]

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
        ranges={selectedDates}
        onChange={(item) => setSelectedDates([item.selection])}
        minDate={new Date()} // Prevent past date selection
        disabledDay={isDateDisabled} // Disable unavailable dates
      />
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => console.log("Selected Dates:", selectedDates)}
      >
        Book Now
      </button>
    </div>
  );
};

export default AvailableDateSelector;

// ✅ Prop Validation
AvailableDateSelector.propTypes = {
  availableDates: PropTypes.arrayOf(PropTypes.string).isRequired,
};
