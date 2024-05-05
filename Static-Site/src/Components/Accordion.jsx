import "../Assets/Accordion/accordion.css";
import React, { useState } from 'react';
import PropTypes from "prop-types";

function Accordion(props, index) {
    const [isOpen, setIsOpen] = useState(false);
    const accordionData = props.data;
    
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={isOpen ? "day-section active" : "day-section"}>
                <h3>
                    <button className="day-header" onClick={toggleAccordion} aria-expanded={isOpen ? true : false}>
                        {accordionData.title}
                    </button>
                </h3>
                {isOpen && (
                    <div className={isOpen ? "schedule active" : "schedule"} aria-hidden={isOpen ? true : false}>
                        {accordionData.content.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <p className="note">Note: Schedule is subject to change.</p>
                    </div>
                )}
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