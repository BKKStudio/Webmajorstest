"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImgwaveMany from "../../../../public/Images/Wave/wavemany.png";
import axios from "axios";

export default function Page({ params }) {
  const Domain = process.env.DOMAIN; // Use NEXT_PUBLIC_ for public variables
  const [data, setData] = useState(null);
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Domain}api/thesis/get-by-id/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatYears = (year) => {
    const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues
    const academicYearOptions = { year: "numeric", timeZone: "Asia/Bangkok" };
    const thaiYearFormatter = new Intl.DateTimeFormat(
      "th-TH",
      academicYearOptions
    );
    year = thaiYearFormatter.format(academicYearDate).replace("พ.ศ. ", "");
    return year;
  };

  if (data == null) {
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
          <div className="drop-shadow-xl min-w-64  rounded-xl bg-white relative">
            <div className="absolute p-2 text-white flex justify-end w-full">
              <span className="bg-[#991F23] px-12 py-1 rounded-xl text-[12px]">
                {formatYears(data.AcademicYear)}
              </span>
            </div>
            <div className="flex flex-col py-6 gap-3 lg:px-5 max-lg:px-3 ">
              <div className="font-bold  lg:text-xl  ">
                <div>
                  หัวข้อ:{" "}
                  <span className="font-medium">{data.TitleProject}</span>
                </div>
              </div>
              <div className="w-full  h-0.5 bg-black"></div>
              <div
                className=" flex flex-col justify-between w-full h-full px-2"
                dangerouslySetInnerHTML={{
                  __html: data.Abstract,
                }}
              ></div>
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
