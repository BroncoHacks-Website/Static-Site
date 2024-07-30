
import React from 'react';
import '../styles/FAQ.css';
import FAQBoxes from '../Components/FAQBoxes';
import faqs from '../Assets/FAQ/FAQdata';

function FAQ() {
    return (
      <div className="faq-container">
        <div className="faq-background">
          <div className="title-container">
            <h1 className="faq-title">FAQ</h1>
          </div>
          <div className="faq-column">
            {faqs.map((faq, index) => (
              <FAQBoxes
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default FAQ;