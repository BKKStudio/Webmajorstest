"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImgwaveMany from "../../../../public/Images/Wave/wavemany.png"

export default function Page({ params }) {
  const [data, setData] = useState(null);
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://testapiwebmajors.vercel.app/api/thesisRoutes/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (data == null) {
    return (
      <main className="pt-16 bg-gradient-to-b from-white to-[#991F23] ">
        <article className="w-full flex justify-center mt-16">
          <div>Loadding</div>
        </article>
      </main>
    );
  }
  return (
    <main className="pt-16 bg-gradient-to-b from-white to-[#991F23] ">
      <article className="w-full flex justify-center mt-16 ">
        <div className="max-w-6xl w-full flex flex-col gap-3 max-lg:px-4">
          <div className="text-3xl text-center text-[#991F23]">
            ปริญญานิพนธ์
          </div>
          <div className="text-base text-center font-bold">
            วิศวกรรมคอมพิวเตอร์
          </div>
          <Link
            href={"/Pages/Thesis"}
            className="w-24 h-12 flex items-center justify-center no-underline rounded-xl  bg-white text-center text-[#991F23]"
          >
            {"<<"}ย้อนกลับ
          </Link>
          <div className="bg-white drop-shadow-xl min-w-64 py-6 rounded-xl bg-white relative">
            <div className="absolute p-2 text-white flex justify-end w-full">
              <span className="bg-[#991F23] px-12 py-1 rounded-xl text-[12px]">
                {data.AcademicYear}
              </span>
            </div>
            <div className="flex flex-col gap-3 lg:px-5 max-lg:px-3 pt-14">
              <div className="font-bold  lg:text-xl  ">
                <div>
                  หัวข้อ:{" "}
                  <span className="font-medium">{data.TitleProject}</span>
                </div>
              </div>
              <div className="w-full  h-0.5 bg-black"></div>
              <div className=" flex flex-col justify-between w-full h-full px-2">
                {data.Abstract}
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <Image src={ImgwaveMany} alt="" />
      </article>
    </main>
  );
}
