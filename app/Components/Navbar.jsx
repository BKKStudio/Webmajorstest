"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BsList, BsXLg } from "react-icons/bs";
import { useRouter } from "next/navigation";



export default function Navbar() {
  const [OpenModal, setOpenModal] = useState(false);
  const [Lineanimation, setLineanimation] = useState("");
  const [path, setPath] = useState("");
  const router = useRouter();
  const currentPath = router.pathname;
  
  const animationLine = (data) => {
    setLineanimation(data);
    let currentPath = window.location.pathname;
    setPath(currentPath);
  };
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/Pages/GettoKnow") setLineanimation("1");
    else if (currentPath === "/Pages/CoursesOffered") setLineanimation("2");
    else if (currentPath === "/Pages/Thesis") setLineanimation("3");
    else if (currentPath === "/Pages/Personnels") setLineanimation("4");
    else if (currentPath === "/Pages/DowloadDocument") setLineanimation("5");
    else if (currentPath === "/Pages/Contact") setLineanimation("6");
  }, []);
  
  const navLinks = [
    { label: "รู้จักวิศวะคอมพิวเตอร์", path: "/Pages/GettoKnow", id: "1" },
    { label: "รายวิชาที่เปิดสอน", path: "/Pages/CoursesOffered", id: "2" },
    { label: "ปริญญานิพนธ์", path: "/Pages/Thesis", id: "3" },
    { label: "บุคลากร", path: "/Pages/Personnels", id: "4" },
    { label: "ดาวน์โหลดเอกสาร", path: "/Pages/DowloadDocument", id: "5" },
    { label: "ติดต่อ", path: "/Pages/Contact", id: "6" },
  ];

  return (
    <div className="fixed w-full z-101">
      <nav className="w-full bg-white flex  justify-center z-100 ">
        <div className="max-w-6xl w-full flex justify-between py-1 bg-white px-3 ">
          <Link href={"/"} onClick={() => animationLine("")}>
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
      <div className="w-full bg-gray-100 z-100 py-3 flex max-lg:hidden justify-center">
        <div className="max-w-6xl w-full px-4">
          <div className="flex gap-4">
            {navLinks.map(({ label, path, id }) => (
              <div key={id} className="h-full relative">
                <Link
                  href={path}
                  className="no-underline nav"
                  onClick={() => animationLine(id)}
                >
                  <div
                    className={`${
                      Lineanimation == id 
                        ? "hidden"
                        : "hover:text-[#991F23]"
                    }`}
                  >
                    {label}
                  </div>
                  <div
                    className={`${
                      Lineanimation == id 
                        ? "text-[#991F23]"
                        : "hidden"
                    }`}
                  >
                    {label}
                  </div>
                </Link>
                <div
                  className={`${
                    Lineanimation == id 
                      ? "w-full h-[3px] absolute bg-[#991F23] rounded-xl left-0 -bottom-[10px]"
                      : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
