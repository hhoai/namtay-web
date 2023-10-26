function User() {
  return (
    <div className="m-auto">
      <div className="p-[40px_50px] mb-20 w-[860px] border-[1px] border-solid border-[#73737333] shadow-[0px_2px_6px_0px_#00000040]">
        <p className="mb-4 text-3xl font-bold">
          Đăng ký nhận ngay thông báo về ưu đãi !!
        </p>
        <p className="text-xl mb-3">
          YesIDo luôn cập nhật các xu hướng, các mức ưu đãi mà bạn khó có thể bỏ
          lỡ
        </p>
        <div className="flex gap-5">
          <input type="email" placeholder="Nhập email của bạn" className="grow py-2 px-3 rounded border-[1px] border-solid border-[var(--primary)]"/>
          <button className="py-2 px-7 rounded bg-[var(--primary)] text-[var(--white)]">Nhận ngay</button>
        </div>
      </div>
    </div>
  );
}

export default User;
