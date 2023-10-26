import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Authentication from "./Authentication.js";

function Header() {
  return (
    <div className="fixed z-20 w-[100%]">
      <div className="flex flex-col">
        <Contact />
        <div className="flex justify-center shadow-md">
        <div className="navigation flex items-center w-[1140px] h-[80px] px-5 justify-between bg-white">
          <a href="/">
            <img src="./img/logo.svg" alt="namtay.vn" />
          </a>
          <Menu />
          <Authentication />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
