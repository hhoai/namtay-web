import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const INFOR = [
  {
    icon: FaLocationDot,
    content:
      "Lô 19-20 Đường Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, TP. Hà Nội",
  },
  {
    icon: FaPhone,
    content: "1900.888.690",
  },
  {
    icon: MdOutlineEmail,
    content: "contact@namtay.vn",
  },
];

function Information() {
  return (
    <div>
      <div className="text-5xl font-bold mb-[40px]">
        <h2 className="py-2">Tạo trang cưới điện tử</h2>
        <h2>Nhận mừng cưới online</h2>
      </div>
      <div className="mb-8">
        <p className="mb-3 text-lg">CÔNG TY CỔ PHẦN NẮM TAY</p>
        <p className="">
          Mã số doanh nghiệp: 0109689204 cấp ngày 01/07/2021 tại Sở Kế Hoạch và
          Đầu tư Thành phố Hà Nội
        </p>
      </div>
      <div>
        {INFOR.map((item) => (
          <div className="flex pb-4 items-center gap-3">
            <item.icon className="text-lg"/>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
