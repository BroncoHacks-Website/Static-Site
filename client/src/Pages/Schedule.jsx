import logo from '/src/Assets/Profile/icon/BroncoHacks_Logo.png';
import '../styles/Schedule.css';
import Accordion from '../Components/Accordion';
import { accordionData } from "../Assets/Accordion/accordionData";

function Schedule() {

  return (

    <div className="schedule-page">

      <div className='schedule-title-container'> 
        <h1 className='schedule-title'>
          Schedule
        </h1>
      </div>

      <div className='schedule-container'>

        <div className='basic-info'>
          <img src={logo} alt="Logo" />
          <div className="title">
            <h1>BroncoHacks</h1>
              <div className="location-details">
                <p>Building: Student Center</p>
                <p>Room: Ursa Minor</p>
              </div>
            </div>
        </div>

        {accordionData.map( (accordData, index) => (
          <Accordion data={accordData} key={index}></Accordion>
        ))}

      </div>

    </div>
  );
}

export default Schedule;