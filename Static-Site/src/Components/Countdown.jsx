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

  const splitDigits = (num) => {
    return String(num).padStart(2, '0').split('');
  };

  return (
    <div className="cd-container" role="timer" tabIndex="0">
      <h2 className="cd-title">BroncoHacks is starting in</h2>
      <div className="cd-time-wrapper">
        {splitDigits(days).map((dayDigit, index) => (
          <h1 key={`day-${index}`} className={`day-${index}`}>{dayDigit}</h1>
        ))}
        <span className="cd-semicolon">:</span>
        {splitDigits(hours).map((hrsDigit, index) => (
          <h1 key={`hour-${index}`} className={`hour-${index}`}>{hrsDigit}</h1>
        ))}
        <span className="cd-semicolon">:</span>
        {splitDigits(minutes).map((minDigit, index) => (
          <h1 key={`minute-${index}`} className={`minute-${index}`}>{minDigit}</h1>
        ))}
        <span className="cd-semicolon">:</span>
        {splitDigits(seconds).map((secondsDigit, index) => (
          <h1 key={`second-${index}`} className={`second-${index}`}>{secondsDigit}</h1>
        ))}
      </div>
      <div className="cd-txt-wrapper">
        <h3 className="cd-txt-days">Days</h3>
        <h3 className="cd-txt-hours">Hours</h3>
        <h3 className="cd-txt-minutes">Minutes</h3>
        <h3 className="cd-txt-seconds">Seconds</h3>
      </div>
    </div>
  );
}

Countdown.propTypes = {
  deadline: PropTypes.string.isRequired,
};

export default Countdown;

