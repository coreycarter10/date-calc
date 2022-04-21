import React, { useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./DatePickers.css";
import "../App.css";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [message, setMessage] = useState("");
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
    alert("Slack message generated!");

    expirationDate.setUTCHours(15);

    axios
      .post("https://env79oe71tjszze.m.pipedream.net", {
        user,
        expirationDate,
        message,
      })
      .then((res) => {
        console.log("Submission successful");
      });
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
          <option value="Preston">Preston</option>
          <option value="Sydney">Sydney</option>
          <option value="Tanner">Tanner</option>
          <option value="Whitney">Whitney</option>
        </select>
        <input
          id="messageInput"
          type="text"
          placeholder="Message..."
          onChange={(e) => {
            setMessage(e.target.value);
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
