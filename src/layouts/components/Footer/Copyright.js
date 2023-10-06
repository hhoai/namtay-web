import { TiArrowUpThick } from "react-icons/ti";

function Copyright() {
  return (
    <div className="py-5 flex justify-between ">
      <div className="flex items-center">
        <img src="./img/copyright.png" alt="logo" className="w-[120px] mr-4" />
        <p>@2021 NTay., JSC. All rights reserved</p>
      </div>
      <div >
        <a href="/" className="flex items-center text-lg font-bold gap-2">
          <TiArrowUpThick className=""/>
          <p>Quay về đầu trang</p>
        </a>
      </div>
    </div>
  );
}

export default Copyright;
