const MENU = [
  {
    title: "Về chúng tôi",
    to: "/ve-chung-toi",
  },
  {
    title: "Tạo thiệp cưới",
    to: "/themes",
  },
  {
    title: "Hướng dẫn",
    to: "/huong-dan-tao-thiep",
  },
  {
    title: "FAQ",
    to: "/blog",
  },
  {
    title: "Liên hệ",
    to: "/contact",
  },
  // {
  //   title: "Điều khoản & chính sách",
  //   to: "/chinh-sach-su-dung",
  // },
];

function Menu() {
  return (
    <div className="flex flex-col content-end">
      <p className="mb-7 text-xl text-[#252B42] font-bold">Khám phá</p>
      {MENU.map((item, key) => (
        <a href={item.to} className="mb-4 text-base font-bold hover:underline">
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default Menu;
