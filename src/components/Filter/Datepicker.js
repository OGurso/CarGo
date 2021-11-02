import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { StyledDate } from "./styleDatepicker";

const Datepicker = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  console.log();
  function handleSelect(ranges) {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <StyledDate>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        weekStartsOn={1}
        rangeColors={[props.theme.themePrimary]}
        color={props.theme.themePrimary}
      />
    </StyledDate>
  );
};

export default Datepicker;
