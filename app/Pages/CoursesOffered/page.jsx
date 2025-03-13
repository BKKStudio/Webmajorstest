import React from "react";
import Link from "next/link";
import { BsMortarboard, BsReceipt } from "react-icons/bs";
import Carousel from "../../Components/Carousel";
import Image from "next/image";
import Wave3 from "../../../public/Images/Wave/Wave3.png";
import wave2 from "../../../public/Images/Wave/wave2.png";
import ImgContent3 from "../../../public/Images/rsucontent/3.jpg";
import ImgContent4 from "../../../public/Images/rsucontent/4.jpg";
import ImgContent5 from "../../../public/Images/rsucontent/5.jpg";
import ImgContent6 from "../../../public/Images/rsucontent/6.jpg";
import ImgContent10 from "../../../public/Images/rsucontent/10.jpg";
import ImgContent7 from "../../../public/Images/rsucontent/7.jpg";
import ImgContent8 from "../../../public/Images/rsucontent/8.jpg";
import ImgContent9 from "../../../public/Images/rsucontent/9.jpg";
import Model2 from "../../../public/Images/Model/2.png";
import ImgLinecontent1 from "../../../public/Images/Wave/Linecontent.png";
import ImgLinecontent2 from "../../../public/Images/Wave/Linecontent2.png";

export default function CoursesOffered() {
  return (
    <div className="pt-16">
      <Carousel />
      <article className="bg-[#991F23] w-full  h-full  flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center pt-12 lg:pt-16">
          <div className="flex flex-col text-center gap-1"></div>
        </div>
      </article>
      <article className="bg-[#991F23] w-full h-max flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center pt-3 lg:pt-8 pb-26   ">
          <div className="grid grid-cols-3 max-sm:grid-cols-2  text-center text-[#FFFFFF] lg:gap-20 pb-6 max-lg:pb-28">
            <div className="w-full">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src={"/Images/Icons/image.png"}
                  width={100}
                  height={100}
                  className="max-sm:w-3/6"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl py-0.5 max-sm:text-base">
                  Hardware
                </span>
                <span className="text-xs font-normal ">
                  INTERNET OF THINGS(IOT) , <br />
                  ELECTRIC CIRCUIT , DIGITAL CIRCUITS , MICROPROCESSOR AND
                  MICROCONTROLLER
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src={"/Images/Icons/devops.png"}
                  width={100}
                  height={100}
                  className="max-sm:w-3/6"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl py-0.5 max-sm:text-base">
                  Software
                </span>
                <span className="text-xs font-normal pb-4 ">
                  WEB PROGRAMMING , <br />
                  APPLICATION DEVELOPMENT , <br />
                  OBJECT-ORIENTED PROGRAMMING (OOP) ,<br /> FUNDAMENTAL OF
                  ARTIFICIAL INTELLIGENCE
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src={"/Images/Icons/Network.png"}
                  width={100}
                  height={100}
                  className="max-sm:w-3/6"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl py-0.5 max-sm:text-base">Network</span>
                <span className="text-xs font-normal">
                  DATA COMMUNICATION LABORATORY , <br />
                  COMPUTER NETWORKS LABORATORY
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="w-full ">
          <Image alt="" src={Wave3} className="" />
        </div>
      </article>
      <article className="bg-gradient-to-b from-[#FFFFFF] to-[#FFE4E5] w-full h-full flex justify-center items-end">
        <div className="max-w-6xl w-full flex justify-center max-lg:flex-col pt-6 lg:pt-10  gap-9 max-lg:px-3 max-sm:pl-3 max-sm:pr-5">
          <div className="flex flex-col text-center bg-[#FFFFFF] text-[#000000] p-3 drop-shadow-lg rounded-3xl">
            <span className="text-3xl max-sm:text-xl pb-4">
              รายวิชาที่เปิดสอน
            </span>
            <div className="text-sm max-sm:text-xs px-3 py-0.5 text-start">
              <ul className="list-disc">
                <li>CPE101 INTRODUCTION TO COMPUTER ENGINEERING</li>
                <li>CPE161 PROBLEM SOLVING AND COMPUTER PROGRAMMING</li>
                <li>CPE218 DIGITAL CIRCUITS DESIGN</li>
                <li>CPE219 DIGITAL CIRCUITS DESIGN LABORATORY</li>
                <li>CPE231 COMPUTER ENGINEERING MATHEMATICS I</li>
                <li>CPE263 OBJECT-ORIENTED PROGRAMMING</li>
                <li>CPE223 ELECTRIC CIRCUIT ENGINEERING</li>
                <li>CPE241 INTERNET OF THINGS</li>
                <li>CPE360 ALGORITHMS AND DATA STRUCTURES</li>
                <li>CPE225 ELECTRONIC CIRCUIT ENGINEERING</li>
                <li>CPE226 ELECTRONIC CIRCUIT ENGINEERING LABORATORY</li>
                <li>CPE270 FUNDAMENTAL OF ARTIFICIAL INTELLIGENCE</li>
                <li>CPE308 SIGNALS AND SYSTEMS</li>
                <li>CPE326 DATA COMMUNICATION AND DATA NETWORKS</li>
                <li>CPE327 DATA COMMUNICATION LABORATORY</li>
                <li>CPE332 COMPUTER ENGINEERING MATHEMATICS II</li>
                <li>CPE432 COMPUTER ORGANIZATION AND ARCHITECTURE</li>
                <li>CPE361 FUNDAMENTAL OF DATABASE SYSTEMS</li>
                <li>CPE363 APPLICATION DEVELOPMENT</li>
                <li>CPE419 COMPUTER OPERATING SYSTEMS</li>
                <li>CPE426 COMPUTER NETWORKS</li>
                <li>CPE427 COMPUTER NETWORKS LABORATORY</li>
                <li>CPE441 SYSTEM AND SOFTWARE ENGINEERING</li>
                <li>CPE363 APPLICATION DEVELOPMENT</li>
                <li>CPE419 COMPUTER OPERATING SYSTEMS</li>
                <li>CPE491 SENIOR PROJECT I</li>
                <li>CPE492 SENIOR PROJECT  II</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 max-sm:gap-1">
            <div className="w-[399px] max-lg:w-auto">
              <Image
                src={ImgContent10}
                alt=""
                className="drop-shadow-md rounded-3xl"
              />
            </div>
            <div className="flex flex-row items-center gap-3 max-sm:gap-1">
              <div className="w-[245px] max-lg:w-auto max-lg:h-auto">
                <Image
                  src={ImgContent7}
                  alt=""
                  className="drop-shadow-md rounded-3xl"
                />
              </div>
              <div className="flex w-[138px] max-lg:w-auto">
                <Image
                  src={ImgContent8}
                  alt=""
                  className="drop-shadow-md rounded-3xl"
                />
              </div>
            </div>
            <div className="w-[399px] max-lg:w-auto">
              <Image
                src={ImgContent9}
                alt=""
                className="drop-shadow-md rounded-3xl"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="bg-red-100">
        <Image alt="" src={wave2} className=" h-max " />
      </article>
      <article className=" w-full h-full flex justify-center items-end ">
        <div className="max-w-6xl w-full  flex justify-center px-3 pt-8  lg:pt-10 pb-16 gap-9 max-lg:px-3 max-sm:pl-3 max-sm:pr-5  ">
          <div className="flex flex-col  w-full   drop-shadow-lg rounded-3xl">
            <span className="text-[#991F23] text-3xl font-bold px-4 ">
              ภาควิชาวิศวกรรมคอมพิวเตอร์
            </span>
            <div className="w-full h-1 bg-[#991F23] mb-6 ml-4 "></div>
            <span className="text-3xl  bg-[#333333] text-center rounded-t-3xl  max-sm:text-sm py-9 text-white ">
              ประมาณค่าใช้จ่ายสำหรับภาคการศึกษาที่ S/2567
            </span>
            <div className="flex justify-between text-center text-white items-center bg-[#717070] p-4">
              <div className="w-64">
                <span className="text-xl max-sm:text-xs">ลักษณะการกู้ยืมฯ</span>
              </div>
              <div className="w-96">
                <span className="text-xl max-sm:text-xs">
                  ค่าธรรมเนียมแรกเข้าศึกษาและค่าหน่วยกิตภาคเรียน S/2567
                </span>
              </div>
            </div>
            <div className="flex justify-between text-center items-center bg-[#D3D3D3] py-9 px-4">
              <div className="w-64">
                <span className="text-xl max-sm:text-xs">
                  ลักษณะที่ 2 +  Human*
                </span>
              </div>
              <div className="w-96">
                <span className="text-xl max-sm:text-xs">29,900</span>
              </div>
            </div>
            <div className="flex text-center justify-between items-center bg-white p-1">
              <div className="text-xl max-lg:w-auto max-sm:text-xs">
                <span className="flex font-bold text-left pl-5 pt-3 max-sm:pl-2">
                  *ชี้แจงค่าธรรมเนียมแรกเข้าศึกษา ประกอบด้วย
                </span>
                <div className="flex justify-between">
                  <div className="text-start">
                    <ul className="max-sm:pl-2">
                      <li>ค่าบำรุงการศึกษาภาคเรียนที่ S/2567 ภาคละ</li>
                      <li>ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</li>
                      <li>ค่าขึ้นทะเบียนนักศึกษาใหม่</li>
                      <li>ค่าประกันอุบัติเหตุปีละ</li>
                      <li>ค่าทำบัตรนักศึกษา</li>
                      <li>ค่าตรวจสุขภาพ</li>
                      <li>อุปกรณ์เครื่องแต่งกาย</li>
                      <li>ชุดพละ</li>
                      <li className="font-bold">รวม</li>
                    </ul>
                  </div>
                  <div className="text-start">
                    <ul className="max-sm:pl-2">
                      <li>5,000</li>
                      <li>8,000</li>
                      <li>300</li>
                      <li>600</li>
                      <li>500</li>
                      <li>200</li>
                      <li>380</li>
                      <li>720</li>
                      <li className="font-bold">15,700</li>
                    </ul>
                  </div>
                  <div className="text-start">
                    <ul className="">
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li>บาท</li>
                      <li className="font-bold">บาท</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-2xl  bg-[#333333] text-center   max-sm:text-sm py-9 text-white ">
              ประมาณการค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2567
            </span>
            <div className="flex justify-between text-center text-white items-center bg-[#717070] p-4">
              <span className="text-xl max-sm:text-xs">ชั้นปีที่ 1</span>
              <span className="text-xl max-sm:text-xs">ชั้นปีที่ 2</span>
              <span className="text-xl max-sm:text-xs">ชั้นปีที่ 3</span>
              <span className="text-xl max-sm:text-xs">ชั้นปีที่ 4</span>
              <span className="text-xl max-sm:text-xs">รวม</span>
            </div>
            <div className="flex justify-between text-center rounded-b-3xl items-center bg-[#D3D3D3] py-9 px-4">
              <span className="text-xl max-sm:text-xs">104,800</span>
              <span className="text-xl max-sm:text-xs">95,000</span>
              <span className="text-xl max-sm:text-xs">111,400</span>
              <span className="text-xl max-sm:text-xs">85,600</span>
              <span className="text-xl max-sm:text-xs">396,800</span>
            </div>
            <div className="mt-12 w-full flex justify-center  ">
              <Link
                href="https://www2.rsu.ac.th/info/scholarships"
                className="bg-[#0896D2] text-white no-underline justify-center shadow-2xl w-52 h-16 rounded-l-3xl cursor-pointer flex items-center gap-2"
              >
                <BsMortarboard size={30} />
                ทุนการศึกษา
              </Link>
              <Link
                href="https://admissiononline.rsu.ac.th/"
                className="bg-[#DA005A] text-white no-underline  justify-center shadow-2xl w-52 h-16 rounded-r-3xl cursor-pointer flex items-center gap-2"
              >
                <BsReceipt size={30} />
                สมัครเรียน 
              </Link>
            </div>
          </div>
          <Image src={Model2} alt="" className="max-lg:hidden"></Image>
        </div>
      </article>
      <article className=" overflow-hidden">
        <Image src={ImgLinecontent1} alt="" />
        <div className="bg-[#333333] w-full h-full py-24 flex justify-center items-center">
          <div className="max-w-6xl w-full grid grid-cols-2 max-lg:grid-cols-1 justify-center gap-6 px-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RvUbVqx_LxA?si=2jAgXm2iL4PbkvTJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-3xl w-full"
            ></iframe>
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center w-full gap-2">
                <span className="text-3xl font-bold text-white ">
                  รีวิว วิศวกรรมคอมพิวเตอร์
                </span>
                <div className="w-4/5 h-1 bg-[#DA005A]"></div>
                <span className="text-white text-center ">
                  เราไม่ได้เรียนแค่เปลือก แต่เราสอนในเชิงลึกและรอบด้าน ทั้ง
                  Hardware, Software, Network, IoT, AI, Deep Learning
                  ทำงานได้หลากหลาย เช่น Developer, System Engineer, Automation
                  Engineer, DevOps, Network Infrastructure ต้องที่นี่
                  วิศวกรรมคอมพิวเตอร์ ม.รังสิต
                </span>
                <div className="mt-12 w-full flex justify-center  ">
                  <Link
                    href="https://www2.rsu.ac.th/info/scholarships"
                    className="bg-[#0896D2] text-white no-underline  justify-center shadow-2xl w-52 h-16 rounded-l-3xl cursor-pointer flex items-center gap-2"
                  >
                    <BsMortarboard size={30} />
                    ทุนการศึกษา
                  </Link>
                  <Link
                    href="https://admissiononline.rsu.ac.th/"
                    className="bg-[#DA005A] text-white no-underline  justify-center shadow-2xl w-52 h-16 rounded-r-3xl cursor-pointer flex items-center gap-2"
                  >
                    <BsReceipt size={30} />
                    สมัครเรียน
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={ImgLinecontent2} alt="" />
      </article>
      <article className="bg-white w-full h-full pb-12 relative flex justify-center items-end ">
        <div className="max-w-5xl w-full max-lg:px-3">
          <div className="text-[#991F23] text-2xl font-bold">
            ภาพบรรยากาศการเรียนการสอน
          </div>
          <div className="w-full h-px bg-[#991F23]"></div>
          <div className="my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <Image
              src={ImgContent3}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
            <div className="flex gap-4 justify-between max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={ImgContent4}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={ImgContent5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
          </div>
          <div className="max-lg:hidden my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <div className="flex gap-4 justify-between max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={ImgContent5}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={ImgContent5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
            <Image
                src={ImgContent6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
          <div className="lg:hidden my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <Image
                src={ImgContent6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
        </div>
      </article>
      {/* Activity */}
    </div>
  );
}
