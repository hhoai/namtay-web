import Intro from "./Intro";
import Banner from "./Banner";
import Description from "./Description";
import SlideShow from "./SlideShow";

import "./HomePage.css";


function HomePage() {
  return (
    <div className="relative top-28 z-10 font-medium flex flex-col">
      <Intro />
      <Banner />
      <Description />
      <SlideShow />
    </div>
  );
}

export default HomePage;
