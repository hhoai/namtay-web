import { BsTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex bg-[var(--primary)] text-white justify-center items-center gap-2 p-1">
      <p className="text-sm">Gọi cho Nắmtay ngay để được trợ giúp </p>
      <BsTelephoneFill className="h-[14px]"/>
      <a href="tel:1900888690" class="text-white font-bold">
        1900.888.690
      </a>
    </div>
  );
}

export default Contact;
