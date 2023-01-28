import React from "react";
import "./Calendar.scss";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

const CalendarComponent = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="calendar">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
        selectionMode="range"
        numberOfMonths={12}
      />
    </div>
  );
};

export default CalendarComponent;
