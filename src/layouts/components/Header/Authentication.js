function Authentication() {
  return (
    <div className="font-semibold text-base">
      <a href="/login" className="text-[var(--primary)] mr-4 w-[144px] py-3 px-5 border-[1px] border-solid border-[var(--primary)] rounded-xl">Đăng nhập</a>
      <a href="/register" className="text-[var(--white)] bg-[var(--primary)] w-[144px] py-3 px-5 border-[1px] border-solid border-[var(--primary)] rounded-xl">Đăng ký</a>
    </div>
  );
}

export default Authentication;
