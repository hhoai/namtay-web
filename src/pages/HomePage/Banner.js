function Banner() {
  return (
    <div className="flex flex-col items-center my-20 py-20 bg-[#ffdcf5]">
      <h2 className="text-[#f73481] text-6xl font-bold pt-10">
        Không chỉ là một trang web cưới
      </h2>
      <p className="text-[28px] text-[#0f1e94] py-3 mb-5">
        vô vàn tính năng thông minh giúp cuộc sống dễ dàng hơn
      </p>
      <div className="bg-[#f73481] p-5 mb-10 border-[1px] border-solid border-black rounded-lg shadow-[0_6px_#000] w-fit">
        <a className="text-white text-xl font-bold" href="/themes">
          Tạo trang ngay!
        </a>
      </div>
    </div>
  );
}

export default Banner;
