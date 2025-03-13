"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsXLg, BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";

export default function Page() {
  const [LoginOpen, setLoginOpen] = useState(false);
  const [data, setData] = useState(null);
  const [manager, setManager] = useState(null);
  const [ModalData, setModalData] = useState({
    fullname: "",
    contact: "",
    education: "",
    img_profile: "",
    position: "",
    room: "",
  });
  const [education, setEducation] = useState([]);
  const Domain = process.env.DOMAIN;
  const handleSeemore = (id) => {
    setLoginOpen(true);
    const filteredItem = data.find((item) => item.ID === id);
    if (filteredItem) {
      setModalData(filteredItem);
      setEducation(filteredItem.education.split(","));
    }
  };

  const handleSeemore2 = (id) => {
    setLoginOpen(true);
    if (manager.ID === id) {
      setModalData(manager);
      setEducation(manager.education.split(","));
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${Domain}api/personnels/get-all-personnels`
      );
      const filteredData = response.data.data.filter(
        (item) => item.position !== "หัวหน้าภาควิชาวิศวกรรมคอมพิวเตอร์"
      );
      setData(filteredData);
      
      const managerData = response.data.data.find(
        (item) => item.position === "หัวหน้าภาควิชาวิศวกรรมคอมพิวเตอร์"
      );
     setManager(managerData)
     console.log(managerData);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!manager || !data) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-12 h-screen bg-gradient-to-b from-white to-[#991F23] ">
        <div className="spinner-border text-black" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <main className="py-16 bg-gradient-to-b from-white to-[#991F23]">
      <div
        className={`fixed w-full h-screen lg:pt-24 inset-0 z-101 flex justify-center transition-colors ${
          LoginOpen ? "visible bg-black/60" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          className={`max-w-2xl w-full transition-all mt-2 flex flex-col gap-3 max-lg:px-5 ${
            LoginOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <button
                className="p-3 rounded-full bg-white"
                onClick={() => {
                  setLoginOpen(false);
                }}
              >
                <BsXLg />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-2xl w-full bg-white flex justify-center rounded-xl py-4">
              <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1 max-lg:gap-2">
                <div className="flex justify-center">
                  <Image
                    src={ModalData.img_profile_base64}
                    alt=""
                    width={290}
                    height={290}
                    className="max-sm:w-2/4"
                  />
                </div>
                <div className="flex flex-col gap-1 px-4  max-lg:mt-4">
                  <div className="flex gap-2">
                    <span className="font-bold text-base">ชื่อ:</span>
                    <span className="font-medium text-base">
                      {ModalData.fullname}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-base">ตำแหน่ง:</span>
                    <span className="font-medium text-base">
                      {ModalData.position}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">ห้องพัก:</span>
                    <span className="font-medium text-base">
                      {ModalData.room}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-base">
                      ช่องทางการติดต่อ:
                    </span>
                    <span className="flex gap-1 items-center text-base">
                      <BsFillTelephoneFill className="text-base" />:
                      {ModalData.contact}
                    </span>
                  </div>
                  <div
                    className={`flex flex-col gap-2 ${
                      ModalData.ID !== 10 ? "" : "hidden"
                    }`}
                  >
                    <span className="font-bold text-base">วุฒิการศึกษา:</span>
                    <ul className="list-disc ml-2">
                      {education.map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article className="w-full flex justify-center mt-16">
        <div className="max-w-6xl w-full max-lg:px-3 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl text-center text-[#991F23] font-bold">
              บุคลากรสาขาวิชาวิศวกรรมคอมพิวเตอร์
            </div>
          </div>
          <div className="w-full h-1 bg-[#333333] rounded-xl"></div>
          <div className="w-full flex justify-center pt-8">
            <div className="min-w-80 h-full bg-white flex flex-col p-3 items-center gap-3 rounded-xl">
              <Image
                src={manager.img_profile_base64}
                alt=""
                width={290}
                height={290}
              />
              <div className="flex flex-col items-center">
                <span className="text-xl">{manager.fullname}</span>
                <span className="text-base font-bold text-[#991F23]">
                  {manager.position}
                </span>
              </div>
              <div
                className="p-2 bg-[#991F23] w-full text-center text-white cursor-pointer"
                onClick={() => handleSeemore2(manager.ID)}
              >
                ดูเพิ่มเติม
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-5 items-center justify-center">
            {data.map((item) => (
              <div className="flex justify-center" key={item.ID}>
                <div className="max-w-80 h-full bg-white flex flex-col py-3 px-3 items-center gap-3 rounded-xl">
                  <img src={item.img_profile_base64} alt="" width={290} />
                  <div className="flex flex-col items-center">
                    <span className="text-xl">{item.fullname}</span>
                    <span className="text-base font-bold text-[#991F23] text-center">
                      {item.position}
                    </span>
                  </div>
                  <div
                    className="p-2 bg-[#991F23] w-full text-center text-white cursor-pointer"
                    onClick={() => handleSeemore(item.ID)}
                  >
                    ดูเพิ่มเติม
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
