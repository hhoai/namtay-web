function Authentication() {
  return (
    <div className="font-semibold text-lg">
      <a href="/login" className="text-[var(--primary)] mr-4 py-4 px-12 border-2 border-solid border-[var(--primary)] rounded-xl">Đăng nhập</a>
      <a href="/register" className="text-[var(--white)] bg-[var(--primary)] py-4 px-12 border-2 border-solid border-[var(--primary)] rounded-xl">Đăng ký</a>
    </div>
  );
}

export default Authentication;
