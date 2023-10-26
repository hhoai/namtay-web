import { HiArrowRight } from "react-icons/hi";


const INTRO = [
  {
    src: "./img/no-image.png",
    title: `Tiết kiệm +5,000,000đ & 15 ngày chờ in`,
    description:
      "Chỉ vài thao tác đơn giản trên máy tính, trang web cưới đã đến tận tay khách mời mà không tốn thời gian, tiền bạc và công sức của cô dâu chú rể.",
  },
  {
    src: "./img/no-image.png",
    title: "Nắm rõ lượng khách, giảm thiểu cỗ thừa",
    description:
      "Khách mời có thể dễ dàng báo dự tiệc hay không chỉ với một click chuột; kiểm soát số lượng cỗ bàn tốt hơn bao giờ hết.",
  },
  {
    src: "./img/no-image.png",
    title: "Tinh tế báo hỉ đến với nhiều mối quan hệ hơn",
    description:
      "Không còn khó xử với phần đông bạn bè đối tác diện “không mời cũng dở, mời cũng chẳng xong”.",
  },
  {
    src: "./img/no-image.png",
    title: "Nhận mừng dễ dàng, khỏi chờ đến hôn lễ",
    description:
      "Giảm tải gánh nặng dòng tiền; nhận quà ngay khi “thiệp” online được gửi đi.",
  },
];

function Intro() {
  return (
    <div className="relative w-[var(--default-layout-width)] m-auto">
      <div className="mb-10 p-[48px_20px]">
        <div className="flex justify-between my-5 pb-10 border-b-[1px] border-solid border[#D9D9D9]">
          <div className="flex flex-col">
            <h4 className="text-[40px] leading-[60px] font-bold">
              Trải nghiệm độc đáo:<br/>
              Trang cưới điện tử online
            </h4>
            <p className="text-[var(--primary)] text-[40px] leading-[54px] font-bold">Tình yêu - Sáng tạo - Không giới hạn</p> 
            <p className="mb-10 w-[60%] text-xl font-semibold leading-[30px]">
              Tạo ngay các trang web cưới dạng landing page để có trải nghiệm
              nhanh hơn, đẹp hơn, tiện lợi hơn và… nhiều lộc hơn.
            </p>
            <a
              href="/themes"
              className="flex gap-2 items-center py-3.5 px-4 text-[var(--white)] text-base font-bold bg-[var(--primary)] rounded-xl w-fit"
            >
              Tạo ngay
              <HiArrowRight />
            </a>
          </div>
          <img src="./img/no-image.png" alt="" className="h-[324px] w-auto"/>
        </div>
      </div>
      <div id="intro">
      {INTRO.map((item, key) => {
        return (
          <div className="flex items-center justify-between my-10 p-[50px_20px] border-b-[1px] border-solid border[#D9D9D9] last:border-0">
            <div className={`w-[50%] ${key%2 ? "" : "order-last"}`}>
              <h4 className="text-5xl leading-tight font-bold w-[575px] mb-6">{item.title}</h4>
              <p className="text-lg">{item.description}</p>
            </div>
            <img src={item.src} alt="" className="h-[324px] w-auto"/>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Intro;
