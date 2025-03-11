"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import Model1 from "../public/Images/Model/1line.png";
import Wave from "../public/Images/Wave/Wave.png";
import wave2 from "../public/Images/Wave/wave2.png"
import Wave2Rotate from "../public/Images/Wave/wave2Rotate.png";
import Logotiktok from "../public/Images/rsucontent/logotiktok.png";
import Imgcontetn1 from "../public/Images/rsucontent/1.jpg";
import Imgcontetn2 from "../public/Images/rsucontent/2.jpg";
import Imgcontetn3 from "../public/Images/rsucontent/3.jpg";
import Imgcontetn4 from "../public/Images/rsucontent/4.jpg";
import Imgcontetn5 from "../public/Images/rsucontent/5.jpg";
import Imgcontetn6 from "../public/Images/rsucontent/6.jpg";

export default function Home() {
  return (
    <main>
      {/* Image */}
      <article className="bg-[#991F23] w-full pt-12 h-full  flex justify-center overflow-hidden items-end">
        <div className="max-w-6xl w-full  lg:pt-20 max-lg:flex-col-reverse flex max-lg:items-center  lg:justify-between">
          <Image
            alt="Model1"
            src={Model1}
            className="w-max lg:scale-110 max-sm:w-4/5 "
          />
          <div className="text-white flex  lg:pt-40 max-lg:pt-12">
            <div className="flex flex-col  lg:text-end max-lg:text-center  lg:gap-2 gap-2">
              <span className="lg:text-5xl text-base max-sm:text-sm">
                Computer Engineering
              </span>
              <span className="lg:text-3xl text-3xl max-sm:text-xl">
                วิศวกรรมคอมพิวเตอร์
              </span>
              <span className="lg:text-xl font-normal  max-sm:text-xs">
                เรียนครอบคลุมทุกสายงาน Hardware Software Network IOT AI
              </span>
              <span className="">
                ใช้งานอุปกรณ์จริง{" "}
                <span className="lg:text-3xl  font-bold ">
                  จบได้เร็วสุดภายใน 3 ปีครึ่ง!
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-max bg-red-300 z-0  absolute flex items-end ">
          <Image alt="Wave Geer" src={Wave} className=" h-max absolute " />
        </div>
      </article>
      {/* Image */}
      {/* Description CPE */}
      <article className="w-full h-full flex  justify-center py-14 ">
        <div className="max-w-6xl w-full h-full flex justify-center ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
              width={100}
              height={100}
              alt=""
              src={"/Images/Logocpe/LogoCPE1.png"}
            />
            <span className="font-bold text-xl">Computer Engineering</span>
            <p className="lg:px-12 max-lg:px-2 text-center pt-3">
              วิศวกรรมคอมพิวเตอร์
              คือสาขาวิชาที่ศึกษาทางด้านฮาร์ดแวร์และซอฟต์แวร์
              เครือข่ายคอมพิวเตอร์แบบต่างๆ
              ออกแบบและวิเคราะห์วงจรที่ใช้คอมพิวเตอร์ควบคุม
              ออกแบบหน่วยประมวลผลกลางหรือวงจรรวมเพื่อทำงานเฉพาะด้าน
              ศึกษาระบบโครงข่ายคอมพิวเตอร์และอินเตอร์เน็ต
              ศึกษาและปฏิบัติจริงทางด้านระบบเครือข่ายข้อมูล อาทิการออกแบบ
              การสร้าง
              การควบคุมและการจัดการทางด้านฮาร์ดแวร์และซอฟต์แวร์บนระบบเครือข่าย
            </p>
          </div>
        </div>
      </article>
      {/* Description CPE */}
      {/* Video CPE */}
      <article className="bg-[#373737] w-full h-full relative flex justify-center items-end ">
        <div className="max-w-5xl w-full h-full  flex gap-4 lg:py-[400px] max-lg:py-40 max-lg:grid items-center   ">
          <div className="grid grid-rows-2 w-full   gap-4 z-100">
            <div className="  p-2 max-lg:mx-3 bg-white rounded-xl ">
              <iframe
                src="https://www.youtube.com/embed/0B5YzC76cek?si=BFssZFQPx3ZU5yA6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-96 rounded-xl"
              ></iframe>
            </div>
            <div className="  p-2 max-lg:mx-3 bg-white rounded-xl ">
              <iframe
                src="https://www.youtube.com/embed/sT9CsdM3lqI?si=KxFxLnies1Aa-pLB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-96 rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className=" bg-white  h-max px-5 py-4  lg:py-5 max-lg:mx-3 flex justify-center items-center rounded-xl">
            <div className=" max-lg:flex max-lg:flex-col  gap-2">
              <span className="text-2xl max-lg:text-xl font-bold text-center">
                แนวทางประกอบอาชีพ
              </span>
              <div className="grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div>
                  <span className="text-xl max-lg:text-base font-bold text-black">
                    อาชีพด้านราชการ
                  </span>
                  <ul className="list-disc">
                    <li>นักวิชาการคอมพิวเตอร์</li>
                    <li>วิศวกรรมคอมพิวเตอร์</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xl max-lg:text-base font-bold text-black">
                    อาชีพด้านรัฐวิสาหกิจ
                  </span>
                  <ul className="list-disc">
                    <li>นักวิเคราะห์และออกแบบระบบคอมพิวเตอร์</li>
                    <li>ผู้ดูแลระบบเครือข่าย</li>
                    <li>วิศวกรที่ปรึกษา</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xl max-lg:text-base font-bold text-black">
                    อาชีพด้านบริษัทเอกชน
                  </span>
                  <ul className="list-disc">
                    <li>นักโปรแกรม</li>
                    <li>ผู้จัดการโครงการคอมพิวเตอร์</li>
                    <li>นักพัฒนาเว็บไซต์</li>
                    <li>ผู้จัดการซอฟต์แวร์</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xl max-lg:text-base font-bold text-center">
                    การสำเร็จการศึกษา
                  </span>
                  <ul className="list-disc ">
                    <li>สำเร็จการศึกษาได้ก่อน 6 ภาคการศึกษาปกติ</li>
                    <li>เรียนครบตามจำนวนหน่วยกิตที่กำหนดไว้ในหลักสูตร</li>
                    <li>
                      ระดับคะแนนเฉลี่ยสะสมไม่ต่ำกว่า 2.00 <br />
                      และระดับคะแนนเฉลี่ยสะสมวิชาเฉพาะไม่ต่ำกว่า 2.00
                      <br />
                      (จากระดับสูงสุดที่ 4.00)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute z-0  flex flex-col  justify-between items-end ">
          <Image alt="" src={Wave2Rotate} className="  w-full " />
          <Image alt="" src={"/Images/Wave/wave2.png"} className="w-full h-max border-white " width={1920} height={200} />
        </div>
      </article>
      {/* Video CPE */}
      {/* Video CPE */}
      <article className="bg-[#991F23] w-full h-full relative flex justify-center items-end ">
        <div className="max-w-5xl w-full h-full relative  z-100  flex gap-4 lg:py-[400px] max-lg:py-40 max-lg:grid justify-center items-center   ">
          <div className="flex flex-col gap-3">
            <span className="text-5xl text-white text-center ">
              RSU CONTENTS
            </span>
            <div className="text-3xl max-lg:text-base max-lg:px-3 text-white text-center flex justify-center gap-3 items-center">
              รับชมข่าวสารต่างๆ ได้ใน{" "}
              <Link
                href={"https://www.youtube.com/@RangsitUniversity"}
                className="bg-black w-max p-2 flex items-center justify-center rounded-full text-white no-underline"
              >
                <FaTiktok size={25} />
              </Link>
              <Link
                href={"https://www.youtube.com/@RangsitUniversity"}
                className="bg-[#CD201F] w-max  p-2 flex items-center justify-center rounded-full text-white no-underline"
              >
                <FaYoutube size={25} />
              </Link>
              <Link
                href={"https://www.facebook.com/CPE.RSU"}
                className="bg-[#3B5998] w-max p-2 flex items-center justify-center rounded-full text-white no-underline"
              >
                <FaFacebook size={25} />
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 max-lg:px-3  gap-4 justify-center  items-center">
              <div className="text-center flex flex-col justify-between">
                <Link
                  href={
                    "https://www.tiktok.com/@rangsituniversity?is_from_webapp=1&sender_device=pc"
                  }
                >
                  <Image
                    src={Logotiktok}
                    alt=""
                    className="hover:animate-animation-manu"
                  />
                </Link>
                <Link
                  href={
                    "https://www.tiktok.com/@rangsituniversity?is_from_webapp=1&sender_device=pc"
                  }
                  className="p-3 bg-white rounded-2xl text-black no-underline "
                >
                  ดูวิดิโอทั้งหมด
                </Link>
              </div>
              <Link
                href={
                  "https://www.tiktok.com/@rangsituniversity/video/7326506432898108678?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"
                }
              >
                <Image
                  src={Imgcontetn1}
                  alt=""
                  className="rounded-xl hover:animate-animation-shake"
                />
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@rangsituniversity/video/7289769186258160901?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"
                }
              >
                <Image
                  src={Imgcontetn2}
                  alt=""
                  className="rounded-xl hover:animate-animation-shake"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute z-0  flex flex-col  justify-between items-end ">
          <Image alt="" src={Wave2Rotate} className=" h-max w-full " />
          <Image alt="" src={wave2} className=" h-max " />
        </div>
      </article>
      {/* Video CPE */}
      {/*  */}
      <article className="bg-white w-full h-full pb-12 relative flex justify-center items-end ">
        <div className="max-w-5xl w-full max-lg:px-3">
          <div className="text-[#991F23] text-2xl font-bold">
            ภาพบรรยากาศการเรียนการสอน
          </div>
          <div className="w-full h-px bg-[#991F23]"></div>
          <div className="my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <Image
              src={Imgcontetn3}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
            <div className="flex gap-4 justify-between max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={Imgcontetn4}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
          </div>
          <div className="max-lg:hidden my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <div className="flex gap-4 justify-between max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
            <Image
              src={Imgcontetn6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
          <div className="lg:hidden my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <Image
              src={Imgcontetn6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
        </div>
      </article>
      {/* Activity */}
    </main>
  );
}
