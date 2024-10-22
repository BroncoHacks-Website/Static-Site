import Slideshow from "/src/Components/Slideshow.jsx";
// import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from "../Components/DescriptionBox";
import Countdown from "../Components/Countdown";
import "/src/styles/Home.css";

import Food1 from "../Assets/EventPhotos/Food1.jpg";
import Judge1 from "../Assets/EventPhotos/Judge1.jpg";
import Judge2 from "../Assets/EventPhotos/Judge2.jpg";
import Overview1 from "../Assets/EventPhotos/Overview1.jpg";
import Overview2 from "../Assets/EventPhotos/Overview2.jpg";
import Overview3 from "../Assets/EventPhotos/Overview3.jpg";
import Overview4 from "../Assets/EventPhotos/Overview4.jpg";
import Overview5 from "../Assets/EventPhotos/Overview5.jpg";
import Overview6 from "../Assets/EventPhotos/Overview6.jpg";
import Winners1 from "../Assets/EventPhotos/Winners1.jpg";

function Home() {
  const slidesData = [
    { url: Food1 },
    { url: Judge1 },
    { url: Judge2 },
    { url: Overview1 },
    { url: Overview2 },
    { url: Overview3 },
    { url: Overview4 },
    { url: Overview5 },
    { url: Overview6 },
    { url: Winners1 },
  ];

  return (
    <>
      <div className="home-featured-container">
        <div className="home-featured-row">
          <div className="description-box">
            <DescriptionBox />
          </div>
          <div className="containerStyles">
            <Slideshow slides={slidesData} />
          </div>
        </div>
        <Countdown deadline="October, 31, 2024" />
      </div>
    </>
  );
}

export default Home;
