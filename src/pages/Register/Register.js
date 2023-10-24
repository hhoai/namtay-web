import "../LogIn/LogIn.css";

const btn = [
  {
    img: "./img/Authentication/google.png",
    content: "Đăng nhập với Google",
    to: "http://www.google.com",
  },
  {
    img: "./img/Authentication/facebook.png",
    content: "Đăng nhập với Facebook",
    to: "http://www.facebook.com",
  },
];

const form = [
  {
    placeholder: "Họ và tên",
    type: "text",
  },
  {
    placeholder: "Email",
    type: "email",
  },
  {
    placeholder: "Số điện thoại",
    type: "text",
  },
  {
    placeholder: "Mật khẩu",
    type: "password",
  },
  {
    placeholder: "Mã giới thiệu (nếu có)",
    type: "text",
  },
];

function Register() {
  return (
    <div className="w-[1160px] m-auto">
      <div className="header flex items-center justify-between h-[100px]">
        <a href="/">
          <img src="./img/logo.svg" alt="home-page" />
        </a>
        <div>
          <p className="text-lg font-medium">
            Bạn đã có tài khoản?{" "}
            <span className="text-[var(--primary)] font-bold hover">
              <a href="/login">Đăng nhập ngay!</a>
            </span>
          </p>
        </div>
      </div>
      <div className="container flex justify-between items-center py-[100px]">
        <div className="w-[472px]">
          <p className="text-6xl font-bold mb-12">Đăng kí</p>
          {btn.map((item) => (
            <div>
              <a
                href={item.to}
                className="flex justify-center gap-4 items-center text-xl font-bold border-[1px] border-black border-solid rounded-xl h-[60px] mb-5 hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              >
                <img src={item.img} alt="sign in" />
                <p>{item.content}</p>
              </a>
            </div>
          ))}
          <div className="relative">
            <p className="signIn text-[#5a5a5a] text-xl text-center my-12">
              hoặc đăng kí ngay
            </p>
          </div>
          <div className="flex flex-col">
            {form.map((item) => (
              <input
                type={item.type}
                placeholder={item.placeholder}
                className="border-[1px] border-black border-solid rounded-xl p-3 mb-5 text-lg hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mb-5">
            <input type="checkbox" className="p-3" id="toggle" />
            <p className="text-lg">
              Tôi đồng ý với{" "}
              <a href="/hop-dong-dich-vu">
                <span className="font-semibold hover">Hợp đồng</span>
              </a>
              , các{" "}
              <a href="/chinh-sach">
                <span className="font-semibold hover">
                  Điều khoản sử dụng và Chính sách bảo mật
                </span>
              </a>{" "}
              của Nắm Tay.
            </p>
          </div>
          <button className="w-[100%] rounded-xl text-[var(--white)] text-xl font-bold bg-[var(--primary)] py-6 mb-5">
            Tạo tài khoản
          </button>
        </div>
        <div>
          <img
            src="./img/Authentication/sign-up.png"
            alt="sign in"
            className="w-[565px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;

// style span :
