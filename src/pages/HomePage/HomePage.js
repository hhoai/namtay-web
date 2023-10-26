import Intro from "./Intro";
import User from "./User";

function HomePage() {
  return (
    <div className="relative top-28 z-10 font-medium flex flex-col">
      <Intro />
      <User/>
    </div>
  );
}

export default HomePage;
