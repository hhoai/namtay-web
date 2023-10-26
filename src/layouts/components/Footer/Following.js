import { BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
// import { AiOutlineGooglePlus } from "react-icons/ai";

function Following() {
  return ( 
    <div>
      <p className="mb-7 text-xl text-[#252B42] font-bold">Theo dõi <span className="text-[var(--primary)]">YesIDo</span></p>
      <div className="flex gap-4 text-2xl">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><BsGoogle/></a>
      </div>
    </div>
   );
}

export default Following;