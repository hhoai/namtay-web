const POLICY = [
  {
    title: "Điều khoản dịch vụ",
    to: "/dieu-khoan-dich-vu",
  },
  {
    title: "Chính sách bảo mật",
    to: "/chinh-sach-bao-mat",
  },
];

function Policy() {
  return (
    <div className="flex flex-col content-end">
      <p className="mb-7 text-xl text-[#252B42] font-bold">Điều khoản & Chính sách</p>
      {POLICY.map((item, key) => (
        <a href={item.to} className="mb-4 text-base font-bold hover:underline">
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default Policy;
