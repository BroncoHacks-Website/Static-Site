import Slideshow from '/src/Components/Slideshow.jsx';
import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from '../Components/DescriptionBox';
import Countdown from '../Components/Countdown';
import '/src/styles/Home.css'
import Minimap from '../Components/MiniMap.jsx';

function Home() {

    return (
      <>
        <div className="home-featured-container">
          <div className="home-featured-row1">
            <DescriptionBox/>
            <div className="slide-wrapper">
              <div className="slides">
                <div className="containerStyles">
                  <Slideshow slides={slidesData}/>
                </div>
              </div>
            </div>
          </div>
          <Countdown deadline="October, 31, 2024" />
          <div className="home-map">
            <div className="map-wrapper">
              {<Minimap></Minimap>}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Home;