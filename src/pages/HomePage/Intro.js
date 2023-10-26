import { HiChevronDoubleDown } from "react-icons/hi";
import { animateScroll as scroll } from "react-scroll";


const INTRO = [
  {
    src: "./img/HomePage/video2.mp4",
    title: `Tiết kiệm +5,000,000đ & 15 ngày chờ in`,
    description:
      "Chỉ vài thao tác đơn giản trên máy tính, trang web cưới đã đến tận tay khách mời mà không tốn thời gian, tiền bạc và công sức của cô dâu chú rể.",
  },
  {
    src: "./img/HomePage/video3.mp4",
    title: "Nắm rõ lượng khách, giảm thiểu cỗ thừa",
    description:
      "Khách mời có thể dễ dàng báo dự tiệc hay không chỉ với một click chuột; kiểm soát số lượng cỗ bàn tốt hơn bao giờ hết.",
  },
  {
    src: "./img/HomePage/video4.mp4",
    title: "Tinh tế báo hỉ đến với nhiều mối quan hệ hơn",
    description:
      "Không còn khó xử với phần đông bạn bè đối tác diện “không mời cũng dở, mời cũng chẳng xong”.",
  },
  {
    src: "./img/HomePage/video5.mp4",
    title: "Nhận mừng dễ dàng, khỏi chờ đến hôn lễ",
    description:
      "Giảm tải gánh nặng dòng tiền; nhận quà ngay khi “thiệp” online được gửi đi.",
  },
];

const scrollTo = () => {
  scroll.scrollTo(800);
}

function Intro() {
  return (
    <div className="relative pr-10 w-[var(--default-layout-width)] m-auto">
      <div className="mb-10 p-[50px_20px]">
        <div className="flex justify-between my-5">
          <div className="flex flex-col">
            <h4 className="text-[40px] leading-[60px] font-bold">
              Trải nghiệm độc đáo:<br/>
              Trang cưới điện tử online
            </h4>
              <p className="text-[var(--primary)] text-[40px] leading-[54px] font-bold">Tình yêu - Sáng tạo - Không giới hạn</p> 
            <p className="mb-12 w-[60%] text-xl font-semibold leading-[30px]">
              Tạo ngay các trang web cưới dạng landing page để có trải nghiệm
              nhanh hơn, đẹp hơn, tiện lợi hơn và… nhiều lộc hơn.
            </p>
            <a
              href="/themes"
              className="text-[var(--white)] text-lg font-bold bg-[var(--primary)] py-6 px-12 rounded-xl w-fit"
            >
              Tạo ngay
            </a>
            <button
              onClick={scrollTo}
              className="flex items-center text-normal text-[#606060] text-base mt-40"
            >
              <div className="bg-[#f73481] rounded-full p-2 border-[1px] border-black border-solid mr-3">
                <HiChevronDoubleDown className="text-xl text-black bounce" />
              </div>
              Cuộn xuống
            </button>
          </div>
          {/* <video
            id="video"
            width="600"
            src="./img/HomePage/video1.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
          ></video> */}
        </div>
      </div>
      <div id="intro">
      {INTRO.map((item) => {
        return (
          <div className="flex items-center justify-between my-5 p-[50px_20px]">
            <div className="w-[50%]">
              <h4 className="text-5xl leading-tight font-bold w-[575px] mb-6">{item.title}</h4>
              <p className="text-lg">{item.description}</p>
            </div>
            <video
              id="video"
              width="600"
              src={item.src}
              type="video/mp4"
              controls
              autoPlay
              loop
            ></video>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Intro;
