import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePickers.css";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (e) => {
    setDate(e);
  };

  const thirtyDays = new Date(date);
  const sixtyDays = new Date(date);
  const ninetyDays = new Date(date);

  thirtyDays.setDate(date.getDate() + 30);
  sixtyDays.setDate(date.getDate() + 60);
  ninetyDays.setDate(date.getDate() + 90);

  return (
    <div>
      <Calendar
        onChange={(value, event) => {
          onDateChange(value);
        }}
      />
      <h1>Expiration dates:</h1>
      <h2>30 days: {thirtyDays.toLocaleDateString()}</h2>
      <h2>60 days: {sixtyDays.toLocaleDateString()}</h2>
      <h2>90 days: {ninetyDays.toLocaleDateString()}</h2>
    </div>
  );
};

export default DatePicker;
