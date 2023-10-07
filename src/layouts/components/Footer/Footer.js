import Information from "./Information";
import Menu from "./Menu";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="relative z-20 top-28 px-5 bg-[#021238] text-[var(--white)]">
      <div className="flex pt-[60px] pb-4 justify-between border-b-[1px] boder-gray-500">
        <Information />
        <Menu />
      </div>
      <Copyright/>
    </div>
  );
}

export default Footer;
