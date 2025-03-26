import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";
import Button from "../Button";

const AvailableDateSelector = ({ availableDates }) => {
  console.log("Available Dates:", availableDates);

  // Ensure availableDates has valid start and end dates
  const minDate = availableDates?.startDate ? new Date(availableDates.startDate) : new Date();
  const maxDate = availableDates?.endDate ? new Date(availableDates.endDate) : null;

  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: minDate,
      endDate: minDate,
      key: "selection",
    },
  ]);

  return (
    <div className="flex flex-col items-center -mt-12">
      <h2 className="text-xl font-semibold mb-4">Select Your Stay</h2>
      <DateRange
        rangeColors={["#FD6C23"]}
        ranges={selectedDates}
        onChange={(item) => setSelectedDates([item.selection])}
        minDate={minDate} // Set minimum selectable date
        maxDate={maxDate} // Set maximum selectable date
      />
      <Button
        text="Book Now"
        style="btn-wide bg-primary text-white border border-primary"
      />
    </div>
  );
};

export default AvailableDateSelector;

// ✅ Prop Validation
AvailableDateSelector.propTypes = {
  availableDates: PropTypes.shape({
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }).isRequired,
};
