import { BsTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex justify-center w-[100%] bg-[var(--primary)] text-white p-1">
      <div className="flex justify-center items-center w-[1140px]">
      <p className="mr-2 text-sm">Liên hệ ngay với YesIDo để được trợ giúp </p>
      <BsTelephoneFill className="h-[14px]"/>
      <a href="tel:xxxxxxxxxx" class="text-white font-bold">
        xxxx.xxx.xxx
      </a>
      </div>
    </div>
  );
}

export default Contact;
