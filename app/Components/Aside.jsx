import Link from "next/link";
import React from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { FaFacebook ,FaYoutube ,FaTiktok } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="fixed    z-101 pt-36 pl-3 flex flex-col gap-2 max-lg:hidden">
      <Link
        href={"https://admissiononline.rsu.ac.th/"}
        className="bg-[#F50000] w-full px-3 py-3 rounded-xl text-white flex gap-1 no-underline"
      >
        <BiSolidBellRing size={20} />
        <div>สมัครเรียน</div>
      </Link>
      <Link
        href={"https://www.facebook.com/CPE.RSU"}
        className="bg-[#3B5998] w-max p-2 flex items-center justify-center rounded-full text-white no-underline"
      >
        <FaFacebook size={25} />
      </Link>
      <Link
        href={"https://www.youtube.com/@RangsitUniversity"}
        className="bg-[#CD201F] w-max  p-2 flex items-center justify-center rounded-full text-white no-underline"
      >
       <FaYoutube size={25}/>
      </Link>
      <Link
        href={"https://www.youtube.com/@RangsitUniversity"}
        className="bg-black w-max p-2 flex items-center justify-center rounded-full text-white no-underline"
      >
       <FaTiktok size={25}/>
      </Link>
    </aside>
  );
}
