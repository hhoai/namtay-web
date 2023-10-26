import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Mẫu trang",
    to: "/themes",
  },
  {
    title: "Biểu phí",
    to: "/pricing",
  },
  {
    title: "Bài viết",
    to: "/blog",
  },
];

function Menu() {
  return (
    <div className="font-semibold text-[#8B8B8B] text-base flex">
      {MENU_ITEMS.map((item, key) => {
        return <NavLink
        to={item.to}
        style={({ isActive, isPending }) => {
          return {
            // padding: isPending ? "0px 10px" : "0px",
            color: isActive ? "var(--primary)" : "",
            textDecoration: isActive ? "underline solid" : "",
            textUnderlineOffset: isPending ? "" : "6px",
          };
        }}
        className="px-5 hover:text-[var(--primary)]"
      >
        {item.title}
      </NavLink>;
      })}
    </div>
  );
}

export default Menu;
