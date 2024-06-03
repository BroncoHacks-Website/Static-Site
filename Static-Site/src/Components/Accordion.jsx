import "../Assets/Accordion/accordion.css";
import React, { useState } from 'react';
import PropTypes from "prop-types";

function Accordion(props, index) {
    const accordionData = props.data;
    const [Height, setHeight] = useState('0px');
    const [Opacity, setOpacity] = useState('0');
    const [Margin, setMargin] = useState('0 30px');

    const handleClickMenu = () => {
        ((Height == '0px') ? setHeight('270px') : setHeight('0px'));
        ((Opacity == '0') ? setOpacity('1') : setOpacity('0'));
        ((Margin == '0 30px') ? setMargin('20px 30px') : setMargin('0 30px'));
    }

    return (
        <>
            <div className="day-section">
                <h3>
                    <button className="day-header" onClick={handleClickMenu}>
                        {accordionData.title}
                    </button>
                </h3>
                <div className="schedule" style={{ height: Height, margin: Margin, opacity: Opacity, transition: "all 0.5s" }} >
                    {accordionData.content.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <p className="note">Note: Schedule is subject to change.</p>
                </div>
            </div>
        </>
    )
  }
  
  Accordion.propTypes = {
    accordionData: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  };

  export default Accordion