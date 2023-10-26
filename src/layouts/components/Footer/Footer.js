import Information from "./Information";
import Menu from "./Menu";
import Policy from "./Policy";
import Following from "./Following";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="relative z-20 top-28 bg-[#D9D9D9] text-[#4D4848]">
      <div className="flex justify-center">
        <div className="flex pt-[60px] pb-4 w-[1140px] justify-between border-b-[1px] boder-gray-500">
          <Information />
          <Menu />
          <Policy />
          <Following />
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
