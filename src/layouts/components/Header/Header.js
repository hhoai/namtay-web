import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Authentication from "./Authentication.js";

function Header() {
  return (
    <div className="fixed z-20 w-[100%]">
      <Contact />
      <div className="navigation flex items-center h-[80px] px-5 shadow-md justify-between bg-white">
        <a href="/">
          <img src="./img/logo.svg" alt="namtay.vn" />
        </a>
        <Menu />
        <Authentication />
      </div>
    </div>
  );
}

export default Header;
