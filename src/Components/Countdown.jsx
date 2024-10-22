import "../styles/Countdown.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/*
Requires deadline to be passed on as a parameter
Example:
let deadline = "October, 31, 2024";
<Countdown deadline={deadline} />
or 
<Countdown deadline="October, 31, 2024" />
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
      <div className="cd-container" role="timer" tabIndex="0">
        <h2 className="cd-title">BroncoHacks is starting in</h2>
        <div className="cd-time-wrapper">
          <h1 className="cd-days">{createLeadingZero(days)}</h1><span className="cd-semicolon">:</span>
          <h1>{createLeadingZero(hours)}</h1><span className="cd-semicolon">:</span>
          <h1>{createLeadingZero(minutes)}</h1><span className="cd-semicolon">:</span>
          <h1 className="cd-seconds">{createLeadingZero(seconds)}</h1>
        </div>
        <div className="cd-txt-wrapper">

          <span className="cd-txt-days"><h3>Days</h3></span>
          <span className="cd-txt-hours"><h3>Hours</h3></span>
          <span className="cd-txt-minutes"><h3>Minutes</h3></span>
          <span className="cd-txt-seconds"><h3>Seconds</h3></span>

        </div>
      </div>
    </>
  );
}

Countdown.propTypes = {
  deadline: PropTypes.string.isRequired,
};

export default Countdown;

