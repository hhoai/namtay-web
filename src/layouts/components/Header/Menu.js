const MENU_ITEMS = [
  {
    title: "Mẫu trang",
    to: "/themes",
  },
  {
    title: "Biểu phí",
    to: "/pricing",
  },
  {
    title: "Đại lí",
    to: "/affiliate",
  },
  {
    title: "Bài viết",
    to: "/blog",
  },
];

function Menu() {
  return (
    <div className="font-semibold text-[#8B8B8B]">
      {MENU_ITEMS.map((item) => {
        return <a href={item.to} className="px-10">{item.title}</a>;
      })}
    </div>
  );
}

export default Menu;
