import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/*
Requires deadline to be passed on as a parameter
Example:
let deadline = "October, 31, 2024";
<Countdown deadline={deadline} />
*/

function Countdown(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = props.deadline;

  const createLeadingZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <>
      <div className="countdown-container" role="timer" tabIndex="0">
        <div className="countdown-time-wrapper">
          <span className="countdown-days">{createLeadingZero(days)}:</span>
          <span className="countdown-hours">{createLeadingZero(hours)}:</span>
          <span className="countdown-minutes">
            {createLeadingZero(minutes)}:
          </span>
          <span className="countdown-seconds">
            {createLeadingZero(seconds)}
          </span>
        </div>
        <div className="countdown-txt-wrapper">
          <span className="countdown-txt-days">Days</span>
          <span className="countdown-txt-hours">Hours</span>
          <span className="countdown-txt-minutes">Minutes</span>
          <span className="countdown-txt-seconds">Seconds</span>
        </div>
      </div>
    </>
  );
};

Countdown.propTypes = {
  deadline: PropTypes.string.isRequired,
};

export default Countdown;

