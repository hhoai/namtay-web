import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const INFOR = [
  {
    icon: FaLocationDot,
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    icon: FaPhone,
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    icon: MdOutlineEmail,
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    icon: TbWorld,
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  }
];

function Information() {
  return (
    <div>
      <div className="text-5xl font-bold mb-[40px]">
        <img src="./img/logo.svg" alt=""/>
      </div>
      <div>
        {INFOR.map((item, key) => (
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
