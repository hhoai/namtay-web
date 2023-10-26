const USER = [
  {
    img: "https://image.namtay.vn/fit/100/images/wedsite/fXxW1LqhMOdkuN51XnnNMIJaVHGu4KX25nqPyKWf.jpeg",
    name: "Tuấn Hải - Phương Thảo",
    href: "https://namtay.vn/thaohaiwedding",
    a: "yesido.vn/thaohaiwedding",
    description:
      "Sản phẩm của Nắmtay đã giúp mình tiết kiệm đáng kể thời gian và công sức làm thiệp. Nhận thiệp xong bạn bè mình ai ai cũng vô cùng thích thú vì tính tiện lợi của nó. Cực kỳ recommend mọi người sử dụng sản phẩm tuyệt vời này cho các sự kiện quan trọng của mình nhé!",
  },
  // {
  //   img: "https://image.namtay.vn/fit/100/images/wedsite/zj2iaNOoBA_tmp.png",
  //   name: "Hữu Bình - Mai Hương",
  //   href: "https://namtay.vn/bhwedding1706",
  //   a: "yesido.vn/bhwedding1706",
  //   description: "Mình thấy tính năng mừng cưới online khá tiện, thời gian đầu có thể nhiều người sẽ chưa quen nhưng mình tin khi ngày càng có nhiều người dùng rồi thì việc mừng cưới theo hình thức này sẽ phổ biến hơn nữa. Cảm ơn team vì đã phát triển tính năng xịn sò này ^^."
  // },
  // {
  //   img: "https://image.namtay.vn/fit/100/images/wedsite/oenU2G0p8W_cAjWnhY2kX_16.jpeg",
  //   name: "Việt Hà - Tùng Anh",
  //   href: "https://namtay.vn/vuonyeuviethaxtunganh",
  //   a: "yesido.vn/vuonyeuviethaxtunganh",
  //   description: "Không ngờ nhận thiệp xong khách mời ai cũng khen thiệp xịn sò và mới lạ khiến mình vui lắm. Cảm ơn team Nắmtay rất nhiều vì đã luôn hỗ trợ mình nhiệt tình trong quá trình sử dụng ^^."
  // },
  // {
  //   img: "https://image.namtay.vn/fit/100/images/wedsite/TA6fsVacFy_Mirror-Wedding---Thu%CC%89y-Tie%CC%82n-_-Hoa%CC%80ng-Du%CC%9Bo%CC%9Bng-24102021-(386).JPEG",
  //   name: "Hoàng Dương - Thủy Tiên",
  //   href: "https://namtay.vn/hoangduong-thuytien",
  //   a: "yesido.vn/hoangduong-thuytien",
  //   description: "Cảm ơn team Nắmtay rất nhiều vì đã hỗ trợ mình nhiệt tình trong quá trình làm thiệp ^^. Mình đã sử dụng tính năng 'Tạo link đích danh' để gửi lời mời tới tất cả các bạn bè thân thiết. Ai nhận được thiệp đều rất thích thú vì tính mới lạ của nó. Nhất định sẽ giới thiệu sản phẩm độc đáo này tới nhiều người hơn nữa!"
  // },
  // {
  //   img: "https://image.namtay.vn/fit/100/images/wedsite/dHwmYQjh7m_z3356497320240_888ab861878c021ba1cf473b92898441.jpg",
  //   name: " Trọng Nam - Minh Nguyệt",
  //   href: "https://namtay.vn/nnwedding-bg",
  //   a: "yesido.vn/nnwedding-bg",
  //   description: "Làm 'thiệp cưới online' qua Nắmtay là một trải nghiệm khá mới lạ và hay ho nhưng rất độc đáo và tiện lợi. Mình cũng có thể xem và kiểm soát khách mời của mình một cách khá dễ dàng trong mục quản trị của Nắmtay. Tuy đây là một dịch vụ mới nhưng mình tin là sẽ phổ biến hơn trong tương lai không xa."
  // },
];

function User() {
  return (
    <div className="flex px-5 my-20 justify-between items-center">
      <div className="w-[550px]">
        <p className="text-6xl font-bold">Người dùng nói gì về YesIDo</p>
      </div>
      <div className="relative w-fit">
        <div
          data-aos="fade-in"
          data-aos-duration="800"
          className="border-4 border-solid border-[#1C1C1C] px-7 py-[60px] rounded-lg relative z-10 h-full bg-white aos-init aos-animate"
        >
          <div className="swiper customer-comment swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-7c101b5102472b55f"
              aria-live="off"
              // className="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;"
            >
              <div
                className="swiper-slide swiper-slide-active w-[656px]"
                role="group"
                aria-label="1 / 5"
              >
                {USER.map((user) => (
                  <div>
                    <div className="flex items-center mb-14">
                      <div className="h-14 w-14 rounded-full mr-2 border-2 border-solid border-[#F73481] overflow-hidden">
                        <img
                          alt=""
                          src={user.img}
                          className="object-cover max-w-full"
                        />
                      </div>{" "}
                      <div>
                        <h3 className="text-lg lg:text-2xl font-600 mb-1 font-poppins">
                          {user.name}
                        </h3>{" "}
                        <a
                          href={user.href}
                          className="text-sm hover:text-pink-600"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {user.a}
                        </a>
                      </div>
                    </div>{" "}
                    <p className="text-sm lg:text-lg text-[#606060]">
                      {user.description}
                    </p>
                  </div>
                ))}
                {/* <div
              className="swiper-slide swiper-slide-next "
              role="group"
              aria-label="2 / 5"
            >
            </div>
            <div
              className="swiper-slide w-[656px]"
              role="group"
              aria-label="3 / 5"
            >
            </div>
            <div
              className="swiper-slide w-[656px]"
              role="group"
              aria-label="4 / 5"
            >
            </div>{" "}
            <div
              className="swiper-slide w-[656px]"
              role="group"
              aria-label="5 / 5"
            >
            </div> */}
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
        <div className="swiper-pagination bottom-[15%] left-[50%] translate-x-[-50%] flex gap-[5px] swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabindex="0"
            role="button"
            aria-label="Go to slide 1"
            aria-current="true"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 2"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 3"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 4"
          ></span>
          <span
            className="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 5"
          ></span>
        </div>
        <div className="border-4 border-solid border-[#1C1C1C] px-7 py-[60px] rounded-lg absolute top-3.5 right-5 h-full w-full bg-[#F73481]"></div>
      </div>
    </div>
  );
}

export default User;
