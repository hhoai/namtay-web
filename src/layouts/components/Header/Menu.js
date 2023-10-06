import { NavLink } from "react-router-dom";

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
    <div className="font-semibold text-[#8B8B8B] text-lg flex">
      {MENU_ITEMS.map((item) => {
        return <NavLink
        to={item.to}
        style={({ isActive, isPending }) => {
          return {
            // padding: isPending ? "0px 10px" : "0px",
            color: isActive ? "#5468e7" : "#8b8b8b",
          };
        }}
        className="px-10"
      >
        {item.title}
      </NavLink>;
      })}
    </div>
  );
}

export default Menu;
