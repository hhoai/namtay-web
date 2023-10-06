const MENU = [
  {
    title: "Tạo trang",
    to: "/themes",
  },
  {
    title: "Hướng dẫn",
    to: "/huong-dan-tao-thiep",
  },
  {
    title: "Đại lý",
    to: "/affiliate",
  },
  {
    title: "Blog cưới",
    to: "/blog",
  },
  {
    title: "Về nắm tay",
    to: "/ve-chung-toi",
  },
  {
    title: "Điều khoản & chính sách",
    to: "/chinh-sach-su-dung",
  },
];

function Menu() {
  return (
    <div className="flex flex-col content-end items-end">
      <a href="/" className="mb-5 text-right w-fit">
        <img src="./img/logo-white.svg" alt="logo" className="" />
      </a>
      {MENU.map((item) => (
        <a href={item.to} className="mb-5 text-xl font-bold hover:underline">
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default Menu;
