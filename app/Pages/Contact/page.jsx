import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import ImgMap from "../../../public/Images/ContactImg/RSU-MAP.jpg"
import ImgMapRsu from "../../../public/Images/ContactImg/MAP_RSU-2017.jpg"

import wave2 from "../../../public/Images/Wave/wave2.png"
import Wave3Rotate from "../../../public/Images/Wave/Wave3Rotate.png"
import Imggear from "../../../public/Images/Building5/Gear.jpg"

export default function Contact() {
  return (
    <div>
      <article className="bg-[#DAD8D9] w-full pt-12 h-full  flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center pt-12 lg:pt-24">
          <div className="flex flex-col text-center gap-1">
              <span className="text-3xl max-sm:text-xl">แผนที่เดินทาง</span>
              <span className="text-xl max-sm:text-sm">มหาวิทยาลัยรังสิต</span>
              <div className=" pb-40 lg:pt-12 pt-6 lg:pb-96 max-lg:px-3 max-sm:pl-2 max-sm:pr-5">
                <Image alt="" src={ImgMap} className="shadow-md rounded-[30px]"/>
              </div>
            </div>
        </div>
        <div className="w-full h-full absolute flex items-end">
          <Image
            alt=""
            src={wave2}
            className=" h-max "
          />
        </div>
      </article>

      <article className="bg-[#FFFFFF] w-full h-full  flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center pt-12 lg:pt-24">
          <div className="flex flex-col text-center gap-1">
              <span className="text-3xl max-sm:text-xl">แผนที่ใน</span>
              <span className="text-xl max-sm:text-sm">มหาวิทยาลัยรังสิต</span>
              <div className="pt-6 pb-36 lg:pb-96 max-lg:px-3 max-sm:pl-2 max-sm:pr-5">
                <Image  alt="" src={ImgMapRsu} className="shadow-md rounded-[30px]"/>
              </div>
          </div>
        </div>
        <div className="w-full h-full absolute flex items-end ">
          <Image
            alt=""
            src={Wave3Rotate}
            className=" h-max absolute"
          />
        </div>
      </article>

      <article className="bg-[#991F23] w-full h-full  flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center pt-12 lg:pt-24">
          <div className="flex flex-col text-center gap-1 text-[#FFFFFF]">
              <span className="text-3xl max-sm:text-xl">สถานที่ติดต่อ</span>
              <span className="text-xl max-sm:text-sm">ภาควิชาวิศวกรรมคอมพิวเตอร์ วิทยาลัยวิศวกรรมศาสตร์ มหาวิทยาลัยรังสิต</span>
              <div className="pt-6 lg:pt-9 max-lg:px-3 max-sm:pl-2 max-sm:pr-5">
                <Image alt="" src={Imggear} className="shadow-md rounded-[30px]"/>
              </div>
              <div className="flex flex-col pt-6 lg:pt-9 pl-4 lg:pl-0 pb-24 text-left gap-3 "> 
                  <span className="text-xl max-sm:text-xs font-normal">
                    ห้อง 5 – 310 ชั้น 3 อาคารวิษณุรัตน์ (ตึก 5)
                  </span>
                  <span className="text-xl max-sm:text-xs font-normal">
                    52 / 347 เมืองเอก ถนนพหลโยธิน ต.หลักหก อ.เมือง จ.ปทุมธานี 12000
                  </span>
                  <span className="flex text-xl max-sm:text-xs pt-6 lg:pt-9">
                    <div className="font-bold pr-2">
                      Tel :
                    </div>
                    <div className="font-normal">
                      02 997 2200 – 30 ต่อ 3270
                    </div>
                  </span>
                  <span className="flex text-xl max-sm:text-xs">
                    <div className="font-bold pr-2">
                      Fax :
                    </div>
                    <div className="font-normal">
                      02 997 2200 – 30 ต่อ 3230 หรือ 02 533 9472
                    </div>
                  </span>
                  <span className="flex text-xl max-sm:text-xs pt-6 lg:pt-9">
                    <div className="font-bold pr-2">
                      Facebook :
                    </div>
                    <div>
                      <Link
                        className="text-[#FFFFFF] font-normal no-underline"
                        href="https://web.facebook.com/CPE.RSU"
                      >
                        วิศวกรรมคอมพิวเตอร์ ม.รังสิต (CPE.RSU)
                      </Link>
                    </div>
                  </span>
                  <span className="flex text-xl max-sm:text-xs">
                    <div className="font-bold pr-2">
                      Web :
                    </div>
                    <div>
                      <Link
                        className="text-[#FFFFFF] font-normal no-underline"
                        href="http://cpe.rsu.ac.th"
                      >
                        http://cpe.rsu.ac.th
                      </Link>
                    </div>
                  </span>
                  <span className="flex text-xl max-sm:text-xs">
                    <div className="font-bold pr-2">
                      Email :
                    </div>
                    <div className="font-normal">
                      duang-arthit@rsu.ac.th
                    </div>
                  </span>
              </div>
          </div>
        </div>
      </article>
    </div>
  )
}
