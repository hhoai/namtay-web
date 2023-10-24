import { FiArrowRightCircle } from "react-icons/fi";

const THEMES = [
  {
    src: "./img/slider-homepage/theme-2.png",
    alt: "theme-2",
  },
  {
    src: "./img/slider-homepage/theme-3.png",
    alt: "theme-3",
  },
  {
    src: "./img/slider-homepage/theme-4.png",
    alt: "theme-4",
  },
  // {
  //   src: "./img/slider-homepage/theme-1.png",
  //   alt: "theme-1"
  // },
];

function SlideShow() {
  return (
    <div className="bg-black py-12">
      <h2 className="mb-4 text-[var(--white)] text-center text-5xl font-bold">
        Không chỉ dừng lại ở cưới
      </h2>
      <p className="mb-10 text-[#f73481] text-center text-xl">
        Khám phá kho theme đa dạng phong cách cho cả các mục đích sinh nhật,
        mừng thọ, thiện nguyện, gây quỹ, v.v.
      </p>
      <div className="flex justify-between mb-6">
        {THEMES.map((theme) => (
          <a href="/themes">
            <img
              src={theme.src}
              alt={theme.alt}
              className="w-[485px] h-[360px] rounded-lg"
            />
          </a>
        ))}
      </div>
      <a
        href="/themes"
        className="flex items-center justify-center gap-[5px] text-[#f73481] text-2xl font-bold hover:underline"
      >
        Xem tất cả <FiArrowRightCircle />
      </a>

      
    </div>
  );
}

export default SlideShow;
