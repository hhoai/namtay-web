import { TiArrowUpThick } from "react-icons/ti";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollTo(0);
};

function Button() {
  return (
    <div className="fixed bottom-10 right-5 z-30 justify-between">
      <button
        className="items-center p-3.5 rounded-full shadow-[0px_1px_4px_0px_#00000040] bg-[#D9D9D9] text-2xl font-bold gap-2"
        onClick={scrollToTop}
      >
        <TiArrowUpThick className="" />
      </button>
    </div>
  );
}

export default Button;
