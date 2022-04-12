import React, { useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./DatePickers.css";
import "../App.css";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [ticketNumber, setTicketNumber] = useState("");
  const [user, setUser] = useState("");

  const onDateChange = (e) => {
    setDate(e);
  };

  const thirtyDays = new Date(date);
  const sixtyDays = new Date(date);
  const ninetyDays = new Date(date);

  thirtyDays.setDate(date.getDate() + 30);
  sixtyDays.setDate(date.getDate() + 60);
  ninetyDays.setDate(date.getDate() + 90);

  const onExpirationDateChange = (e) => {
    setExpirationDate(e);
  };

  const onSubmit = () => {
    expirationDate.setHours(8);

    const dateWeWant = new Date(expirationDate).getTime();

    const timeToExpire = setInterval(function () {
      const now = new Date().getTime();

      const timeRemaining = dateWeWant - now;

      if (timeRemaining < 0) {
        clearInterval(timeToExpire);

        axios
          .post("https://env79oe71tjszze.m.pipedream.net", {
            user,
            ticketNumber,
          })
          .then((res) => {
            console.log("Submission successful");
          });
      }
    }, 1000);
  };

  return (
    <div id="contentDiv">
      <h1>EasyPost Claim Tool</h1>
      <Calendar
        onChange={(value, event) => {
          onDateChange(value);
        }}
      />
      <h1>Expiration dates:</h1>
      <h2>30 days: {thirtyDays.toLocaleDateString()}</h2>
      <h2>60 days: {sixtyDays.toLocaleDateString()}</h2>
      <h2>90 days: {ninetyDays.toLocaleDateString()}</h2>

      <h2>Set up an automated slack message:</h2>
      <Calendar
        onChange={(value, event) => {
          onExpirationDateChange(value);
        }}
      />
      <div id="slackDiv">
        <select
          id="selectUser"
          onChange={(e) => {
            setUser(e.target.value.toLowerCase());
          }}
        >
          <option value="default">Select user..</option>
          <option value="Ashley">Ashley</option>
          <option value="Connor">Connor</option>
          <option value="Corey">Corey</option>
          <option value="Joe">Joe</option>
          <option value="Mandy">Mandy</option>
          <option value="Sydney">Sydney</option>
          <option value="Tanner">Tanner</option>
          <option value="Whitney">Whitney</option>
        </select>
        <input
          id="ticketInput"
          type="text"
          placeholder="Enter ticket number"
          onChange={(e) => {
            setTicketNumber(e.target.value);
          }}
        />
        <button id="submitButton" onClick={() => onSubmit()}>
          Submit slack message
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
