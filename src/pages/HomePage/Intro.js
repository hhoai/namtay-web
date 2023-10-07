import { HiChevronDoubleDown } from "react-icons/hi";


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

function Intro() {
  return (
    <div className="relative pr-10">
      <div className="mb-10 p-[50px_20px]">
        <div className="flex justify-between my-5">
          <div className="w-[50%] flex flex-col">
            <h4 className="text-[64px] leading-none font-bold w-[575px] mb-6">
              Trang cưới điện tử{" "}
              <span className="text-[#f73481]">mừng cưới</span> online
            </h4>
            <p className="text-xl mb-12">
              Tạo ngay các trang web cưới dạng landing page để có trải nghiệm
              nhanh hơn, đẹp hơn, tiện lợi hơn và… nhiều lộc hơn.
            </p>
            <a
              href="/themes"
              className="text-[var(--white)] text-lg font-bold bg-[var(--primary)] py-6 px-12 border-2 border-solid border-black rounded-xl w-fit"
            >
              Tạo ngay
            </a>
            <a
              href="#intro"
              className="flex items-center text-normal text-[#606060] text-base mt-40"
            >
              <div className="bg-[#f73481] rounded-full p-2 border-[1px] border-black border-solid mr-3">
                <HiChevronDoubleDown className="text-xl text-black bounce" />
              </div>
              Cuộn xuống
            </a>
          </div>
          <video
            id="video"
            width="600"
            src="./img/HomePage/video1.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
          ></video>
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
