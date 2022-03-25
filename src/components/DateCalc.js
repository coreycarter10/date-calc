import React, { useState } from "react";

const DateCalc = () => {
  const today = new Date();
  const thirtyDays = new Date();
  const sixtyDays = new Date();
  const ninetyDays = new Date();

  thirtyDays.setDate(today.getDate() + 30);
  sixtyDays.setDate(today.getDate() + 60);
  ninetyDays.setDate(today.getDate() + 90);

  return (
    <div>
      <h1>Expiration dates:</h1>
      <h2>30 days: {thirtyDays.toLocaleDateString()}</h2>
      <h2>60 days: {sixtyDays.toLocaleDateString()}</h2>
      <h2>90 days: {ninetyDays.toLocaleDateString()}</h2>
    </div>
  );
};

export default DateCalc;

// https://ep-date-calc.herokuapp.com/