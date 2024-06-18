"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BsList, BsXLg } from "react-icons/bs";

export default function Navbar() {
  const [OpenModal, setOpenModal] = useState(false);
  const [Lineanimation, setLineanimation] = useState("");
  return (
    <div className="fixed w-full z-101">
      <nav className="w-full bg-white flex  justify-center z-100 ">
        <div className="max-w-6xl w-full flex justify-between py-1 bg-white px-3 ">
          <Link href={"/"} onClick={() => setLineanimation("")}>
            <Image
              src={"/Images/Rsu_logo.png"}
              width={150}
              height={150}
              alt="Logo"
            ></Image>
          </Link>
          <div className="flex gap-5 items-center text-black max-lg:hidden">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                สมัครเรียน
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://admissiononline.rsu.ac.th/regisBachelor/RegisBachelor"
                  >
                    ปริญญาตรี
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://admissiononline.rsu.ac.th/regisMaster/regisMasterForm"
                  >
                    ปริญญาโท
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://admissiononline.rsu.ac.th/regisDoctor/regisDoctorForm"
                  >
                    ปริญญาเอก
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://www.rsuip.org/admissions/how-to-apply/"
                  >
                    International
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                นักศึกษา
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://intranet.rsu.ac.th/"
                  >
                    Intranet
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://www.rsu.ac.th/international/"
                  >
                    International Students
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="https://lms.rsu.ac.th/">
                    E-Learning
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="https://www2.rsu.ac.th/AcademicCalendar/day"
                  >
                    ปฎิทินการศึกษา
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={"https://www2.rsu.ac.th/faculties/faculty"}
              className="flex gap-1 text-black no-underline"
            >
              วิทยาลัยและคณะ
            </Link>
          </div>
          {/* Responsive NavBar    */}
          <div className="flex items-center  lg:hidden">
            {OpenModal === false ? (
              <BsList size={30} onClick={() => setOpenModal(!OpenModal)} />
            ) : (
              <BsXLg size={30} onClick={() => setOpenModal(!OpenModal)} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`w-full absolute lg:hidden bg-white shadow-xl ${
          OpenModal === false
            ? "z-0 h-0 overflow-hidden duration-500"
            : "h-68 z-50 overflow-hidden  duration-500"
        }`}
      >
        <div className="flex flex-col py-3 items-center justify-center gap-3">
          <Link href="/Pages/GettoKnow" className="no-underline text-black ">
            รู้จักวิศวะคอมพิวเตอร์
          </Link>
          <Link
            href="/Pages/CoursesOffered"
            className="no-underline text-black"
          >
            รายวิชาที่เปิดสอน
          </Link>
          <Link href="/Pages/Thesis" className="no-underline text-black">
            ปริญญานิพนธ์
          </Link>
          <Link href="/Pages/Personnels" className="no-underline text-black">
            บุคลากร
          </Link>
          <Link
            href="/Pages/DowloadDocument"
            className="no-underline text-black"
          >
            ดาวน์โหลดเอกสาร
          </Link>
          <Link href="/Pages/Contact" className="no-underline text-black">
            ติดต่อ
          </Link>
        </div>
      </div>
      {/* UnderNav slideManu */}
      <div className="w-full bg-gray-100 z-100 py-3  flex max-lg:hidden justify-center">
        <div className="max-w-6xl w-full px-4">
          <div className="flex gap-4 ">
            <div className={`h-full relative `}>
              <Link
                href="/Pages/GettoKnow"
                className={`no-underline nav  `}
                // onMouseEnter={() => setLineanimation("1")}
                onClick={() => {
                  setLineanimation("1");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "1" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  รู้จักวิศวะคอมพิวเตอร์
                </div>
                <div
                  className={`${
                    Lineanimation == "1" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  รู้จักวิศวะคอมพิวเตอร์
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "1"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
            <div className={`h-full relative `}>
              <Link
                href="/Pages/CoursesOffered"
                className={`no-underline nav  `}
                onClick={() => {
                  setLineanimation("2");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "2" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  รายวิชาที่เปิดสอน
                </div>
                <div
                  className={`${
                    Lineanimation == "2" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  รายวิชาที่เปิดสอน
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "2"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
            <div className={`h-full relative `}>
              <Link
                href="/Pages/Thesis"
                className={`no-underline nav  `}
                // onMouseEnter={() => setLineanimation("1")}
                onClick={() => {
                  setLineanimation("3");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "3" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  ปริญญานิพนธ์
                </div>
                <div
                  className={`${
                    Lineanimation == "3" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  ปริญญานิพนธ์
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "3"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
            <div className={`h-full relative `}>
              <Link
                href="/Pages/Personnels"
                className={`no-underline nav  `}
                // onMouseEnter={() => setLineanimation("1")}
                onClick={() => {
                  setLineanimation("4");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "4" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  บุคลากร
                </div>
                <div
                  className={`${
                    Lineanimation == "4" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  บุคลากร
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "4"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
            <div className={`h-full relative `}>
              <Link
                href="/Pages/DowloadDocument"
                className={`no-underline nav  `}
                // onMouseEnter={() => setLineanimation("1")}
                onClick={() => {
                  setLineanimation("5");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "5" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  ดาวน์โหลดเอกสาร
                </div>
                <div
                  className={`${
                    Lineanimation == "5" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  ดาวน์โหลดเอกสาร
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "5"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
            <div className={`h-full relative `}>
              <Link
                href="/Pages/Contact"
                className={`no-underline nav  `}
                // onMouseEnter={() => setLineanimation("1")}
                onClick={() => {
                  setLineanimation("6");
                }}
              >
                <div
                  className={`${
                    Lineanimation == "6" ? "hidden" : "hover:text-[#991F23]"
                  }`}
                >
                  ติดต่อ
                </div>
                <div
                  className={`${
                    Lineanimation == "6" ? "text-[#991F23]" : "hidden"
                  }`}
                >
                  ติดต่อ
                </div>
              </Link>
              <div
                className={`${
                  Lineanimation == "6"
                    ? "w-full h-[3px] absolute bg-[#991F23]  rounded-xl left-0 -bottom-[10px]"
                    : "w-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
