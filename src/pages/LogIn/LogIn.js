import { useRef, useState } from "react";
import "./LogIn.css";

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

function LogIn() {
  // const inputEmail = useRef();

  // const validationForm = () => {};
  // const handleBtn = () => {
  //   console.log(logInBtn.current);
  // };
  const usernameRef = useRef();
  const passwordRef = useRef();

  // Create refs for input fields

  // State for error messages
  const [errorMessage, setErrorMessage] = useState("Email và mật khẩu không được để trống!");

  function validateEmail(email) {
    // Regular expression pattern for a valid email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
  }

  // Validation function
  const validateForm = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      setErrorMessage(`${errorMessage}`);
      alert(errorMessage);
      return false;
    }

    if (!validateEmail(username)) {
      alert("Email không đúng định dạng!");
      return false;
    }

    // You can add more complex validation here, e.g., checking for the format of the username and password.

    return true;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error message
    setErrorMessage("");

    // Validate the form
    if (validateForm()) {
      const form = [{username:usernameRef.current.value, password:passwordRef.current.value}];
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      // Perform your login logic here
      // You can send the data to the server or handle authentication as needed
      console.log(form);
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="w-[1160px] m-auto">
      <div className="header flex items-center justify-between h-[100px]">
        <a href="/">
          <img src="./img/logo.svg" alt="home-page" />
        </a>
        <div>
          <p className="text-lg font-medium">
            Bạn chưa có tài khoản?{" "}
            <span className="text-[var(--primary)] font-bold hover">
              <a href="/register">Đăng kí ngay!</a>
            </span>
          </p>
        </div>
      </div>
      <div className="container flex justify-between items-center py-[100px]">
        <div>
          <p className="text-6xl font-bold mb-12">Đăng nhập</p>
          {btn.map((item) => (
            <div className="">
              <a
                href={item.to}
                className="flex justify-center gap-4 items-center text-xl font-bold border-[1px] border-black border-solid rounded-xl w-[375px] h-[60px] mb-5 hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              >
                <img src={item.img} alt="sign in" />
                <p>{item.content}</p>
              </a>
            </div>
          ))}
          <div className="relative">
            <p className="signIn text-[#5a5a5a] text-xl text-center my-12">
              hoặc đăng nhập với email
            </p>
          </div>
          <div className="flex flex-col">
          <input
                type="email" placeholder="email"
                ref={usernameRef}
                className="border-[1px] border-black border-solid rounded-xl p-3 mb-5 text-lg hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              />
            <input
                type="password"
                placeholder="password"
                ref={passwordRef}
                className="border-[1px] border-black border-solid rounded-xl p-3 mb-5 text-lg hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[100%] rounded-xl text-[var(--white)] text-xl font-bold bg-[var(--primary)] py-6 mb-5"
          >
            Đăng nhập
          </button>
          <a href="/quen-mat-khau">
            <span className="text-lg font-medium mb-5 hover">
              Quên mật khẩu?
            </span>
          </a>
        </div>
        <div>
          <img
            src="./img/Authentication/sign-in.png"
            alt="sign in"
            className="w-[675px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
