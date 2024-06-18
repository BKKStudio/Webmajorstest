import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTiktok, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#505050] w-full h-full flex justify-center">
      <div className="max-w-6xl w-full text-white py-32 max-lg:px-3">
        <div className="w-full h-px bg-white"></div>
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 gap-4   mt-12">
          <div className="flex flex-col gap-2 max-sm:items-center">
            <span className="font-bold">Categories</span>
            <Link href={""} className="text-white no-underline font-light">
              กิจกรรม
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              ข่าวสาร
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              ดาวน์โหลดเอกสาร
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              วิชาที่เปิดสอน
            </Link>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center">
            <span className="font-bold">Pages</span>
            <Link href={""} className="text-white no-underline font-light">
              กิจกรรม
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              บุคลากร
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              ติดต่อ
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              รายวิชาที่เปิดสอน
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              หลักสูตร
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              แผนการเรียน
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              ศิษย์เก่า
            </Link>
            <Link href={""} className="text-white no-underline font-light">
              รู้จักวิศวคอมพิวเตอร์
            </Link>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center">
            <span className="font-bold">Contact</span>
            <Link
              href={"https://www.facebook.com/CPE.RSU"}
              className="flex items-center gap-2 text-white font-light no-underline"
            >
              <div className="bg-[#3B5998] w-max p-1 flex items-center justify-center rounded-full ">
                <FaFacebook size={23} />
              </div>
              <div>วิศวกรรมคอมพิวเตอร์ ม.รังสิต</div>
            </Link>
            <Link
             href={"https://www.youtube.com/@RangsitUniversity"}
              className="flex items-center gap-2 text-white font-light no-underline"
            >
              <div className="bg-[#CD201F] w-max p-1 flex items-center justify-center rounded-full ">
              <FaYoutube size={23}/>
              </div>
              <div>Rangsit University</div>
            </Link>
            <Link
             href={"https://www.youtube.com/@RangsitUniversity"}
              className="flex items-center gap-2 text-white font-light no-underline"
            >
              <div className="bg-black w-max p-1 flex items-center justify-center rounded-full ">
              <FaTiktok size={23}/>
              </div>
              <div>rangsituniversity</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center">
            <span className="font-bold">Location</span>
            <Link href={""} className="text-white no-underline font-light">
            เส้นทางมา ม.รังสิต
            </Link>
            <Link href={""} className="text-white no-underline font-light">
            แผนที่ใน ม.รังสิต
            </Link>
          </div>
        </div>
        <div className="mt-5 flex max-sm:flex-col  max-sm:items-center justify-center sm:items-end gap-3">
            <img src="/Images/Logocpe/rsulg.png" alt="" width={100}/>
            <div className="w-full text-center max-sm:flex max-sm:flex-col max-sm:gap-2">
                <div className="w-full h-px bg-white"></div>
                <span className="sm:font-light text-sm ">มหาวิทยาลัยรังสิต 52/347 หมู่บ้านเมืองเอก ถนนเอกประจิม ตำบลหลักหก อำเภอเมืองปทุมธานี จังหวัดปทุมธานี</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
