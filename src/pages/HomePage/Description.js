import { FiArrowRightCircle } from "react-icons/fi";


const INTRO = [
  {
    src: "./img/HomePage/video7.mp4",
    title: "Kéo, thả và tùy biến giao diện",
    description:
      "Thêm ảnh, sửa chữ, đổi thông tin bằng các widget thông minh mà không cần bất kỳ kiến thức lập trình nào.",
  },
  {
    src: "./img/HomePage/video8.mp4",
    title: "Tạo đường link vĩnh cửu cho riêng mình",
    description:
      "Lưu giữ kỷ niệm mãi mãi, dễ dàng chia sẻ chỉ với thao tác Copy/Paste.",
  },
  {
    src: "./img/HomePage/video9.mp4",
    title: "Tương tác hai chiều",
    description:
      "Khách mời có thể RSVP (xác nhận dự tiệc) và mừng cưới ngay trên trang.",
  },
  {
    src: "./img/HomePage/video10.mp4",
    title: "Theo dõi, quản lý khách mời liên tục",
    description:
      "Dashboard cùng hệ thống nhắc nhở thông minh, giúp bạn luôn nắm được tình trạng của tất cả khách mời.",
    btn: true,
  },
];

function Description() {
  return (
    <div className="relative">
      <div className="mb-10 p-[50px_20px]">
        <div className="flex justify-between">
          <div className="w-[50%] flex flex-col">
            <h4 className="text-5xl leading-none font-bold w-[575px] mb-6">
              Chọn “Theme” theo phong cách và mục đích riêng
            </h4>
            <p className="text-xl mb-12">
            Từ cưới xin, sinh nhật, mừng thọ, thiện nguyện, đến gây quỹ; từ trẻ trung, nhẹ nhàng đến tinh tế, chuyên nghiệp. Theme nào cũng có!
            </p>
            
          </div>
          <video
            id="video"
            width="600"
            src="./img/HomePage/vid.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            className="mr-[none]"
          ></video>
        </div>
      </div>
      <div id="intro">
      {INTRO.map((item) => {
        return (
          <div className="flex items-center justify-between my-5 p-[50px_20px]">
            <div className="w-[50%]">
              <h4 className="text-5xl leading-tight font-bold w-[575px] mb-6">{item.title}</h4>
              <p className="text-lg mb-8">{item.description}</p>
              {item.btn && <a href="/themes" className="flex items-center gap-3 text-[#f73481] text-2xl">Trải nghiệm ngay <FiArrowRightCircle/></a>}
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

export default Description;
