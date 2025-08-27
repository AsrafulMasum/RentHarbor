import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";

const AvailableDateSelector = ({ availableDates, setDates, disableDates }) => {
  // console.log("Available Dates:", availableDates);

  // Ensure availableDates has valid start and end dates
  const minDate = availableDates?.startDate
    ? new Date(availableDates.startDate)
    : new Date();
  const maxDate = availableDates?.endDate
    ? new Date(availableDates.endDate)
    : null;

  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: minDate,
      endDate: minDate,
      key: "selection",
    },
  ]);

  useEffect(() => {
    setDates(selectedDates);
  }, [selectedDates, setDates]);

  return (
    <div className="flex flex-col items-center -mt-12">
      <h2 className="text-xl font-semibold mb-4">Select Your Stay</h2>
      <DateRange
        rangeColors={["#FD6C23"]}
        ranges={selectedDates}
        onChange={(item) => setSelectedDates([item.selection])}
        minDate={minDate}
        maxDate={maxDate}
        // scroll={{ enabled: true }}
      />
      
    </div>
  );
};

export default AvailableDateSelector;

// ✅ Prop Validation
AvailableDateSelector.propTypes = {
  availableDates: PropTypes.object,
  setDates: PropTypes.func,
};
