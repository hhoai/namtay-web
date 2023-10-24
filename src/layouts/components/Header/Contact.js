import { BsTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex bg-[var(--primary)] text-white justify-center items-center p-1">
      <p className="mr-2 text-sm">Liên hệ ngay với YesIDođể được trợ giúp </p>
      <BsTelephoneFill className="h-[14px]"/>
      <a href="tel:1900888690" class="text-white font-bold">
        1900.888.690
      </a>
    </div>
  );
}

export default Contact;
