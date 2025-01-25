"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import ImgwaveMany from "../../../public/Images/Wave/wavemany.png";
import Image from "next/image";
import axios from "axios";
import { MdClear } from "react-icons/md";

export default function Thesis() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [academicYear, setAcademicYear] = useState(0);
  const [currentYearOptions, setCurrentYearOptions] = useState([]);
  const Domain = process.env.DOMAIN;

  const [Paged, setPaged] = useState({
    currentPaged: 1,
    pageSize: 12,
    search: "",
    year: 0,
  });

  // สถานะ loading สำหรับการแสดง spinner
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true); // เริ่มโหลด
      const response = await axios.post(
        `${Domain}api/thesis/get-all-thesis`,
        Paged
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
      setData(response.data.data); // Axios automatically parses JSON
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // การโหลดเสร็จสิ้น
    }
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 2014; year--) {
      years.push(year);
    }
    setCurrentYearOptions(years);
    fetchData();
  }, [Paged]);

  const onBtnChangPage = (action) => {
    setPaged((prevPaged) => {
      const newPage =
        action === "prev"
          ? Math.max(prevPaged.currentPaged - 1, 1)
          : prevPaged.currentPaged + 1;
      return { ...prevPaged, currentPaged: newPage };
    });
  };

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

  const handleSearch = async (data) => {
    setPaged((prev) => ({
      ...prev,
      search: data, //
    }));
  };

  const handleFilteredYear = async (year) => {
    setAcademicYear(year);
    setPaged((prev) => ({
      ...prev,
      year: parseInt(year), //
    }));
  };

  const handleClear = () => {
    setSearchTerm("");
    setPaged((prev) => ({
      ...prev,
      search: "", //
    }));
  };
  if (loading) {
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
      <article className="w-full flex justify-center mt-16">
        <div className="max-w-6xl w-full max-lg:px-3">
          <div className="text-3xl text-center text-[#991F23]">
            ปริญญานิพนธ์
          </div>
          <div className="text-base text-center font-bold">
            วิศวกรรมคอมพิวเตอร์
          </div>
          <div className="w-full flex justify-between mt-4 max-sm:flex-col gap-3 items-center">
            <div className="flex items-center">
              <div className="flex justify-end items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="focus:outline-none  py-2 w-72 text-center rounded-l-xl relative  text-sm  "
                  placeholder="ค้นหาปริญญานิพนธ์"
                />
                <button
                  type="button"
                  onClick={handleClear}
                  className={`${!searchTerm ? "hidden" : "absolute  shadow-3xl bg-gray-300 text-gray-600  p-1 rounded-full"} `}
                >
                  <MdClear />
                </button>
              </div>
              <button
                type="submit"
                className="bg-white  h-9 px-3 rounded-r-xl"
                onClick={() => handleSearch(searchTerm)}
              >
                <BsSearch size={14} />
              </button>
            </div>
            <div className="flex gap-4 ">
              <select
                name="academicYear"
                id="academicYear"
                className="text-center bg-white text-gray-600 text-xs w-[334px] h-9 rounded-xl py-2 "
                value={academicYear}
                onChange={(e) => handleFilteredYear(e.target.value)}
              >
                <option value={0}>เลือกปีการศึกษา</option>
                {currentYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {formatYears(year)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {!loading && (
            <div>
              {data?.allThesis?.length === 0 ? (
                <div className="text-center text-xl w-full text-gray-600 flex items-center h-72">
                  <p className="text-center w-full">
                    {" "}
                    ไม่พบข้อมูลปริญญานิพนธ์
                  </p>
                </div>
              ) : (
                <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center items-center py-12 gap-5">
                  {data?.allThesis?.map((item) => (
                    <div
                      className="bg-white drop-shadow-xl min-w-64 rounded-xl relative"
                      key={item.ID}
                    >
                      <div className="absolute p-2 text-white flex justify-end w-full">
                        <span className="bg-[#991F23] px-3 rounded-xl text-[12px]">
                          {formatYears(item.AcademicYear)}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 justify-between items-center">
                        <div className="flex flex-col gap-3 justify-centers items-center">
                          <div className="font-bold text-xl px-3 w-full h-28 mt-10 flex justify-center items-center  text-center">
                            {item.TitleProject}
                          </div>
                          <div className="w-3/4 h-0.5 bg-black"></div>
                          <div className="text-center flex flex-col justify-between w-full h-full text-sm px-2">
                            {truncateText(item.Abstract, 100)}
                          </div>
                        </div>
                        <Link
                          href={`/Pages/Thesis/${item.ID}`}
                          className="w-full h-full text-center flex items-end justify-center pb-4 text-[#991F23]"
                        >
                          ดูเพิ่มเติม
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex w-full justify-center pb-5">
            <div className="flex w-80 justify-between items-center">
              <button
                className={`p-2 shadow-3xl rounded-xl cursor-pointer ${
                  Paged.Currentpaged <= 1
                    ? "bg-gray-300 text-gray-500"
                    : "bg-white"
                }`}
                onClick={() => onBtnChangPage("prev")}
                disabled={Paged.currentPaged <= 0 ? true : false}
              >
                {"<<"} Prev
              </button>
              <span className="font-bold text-xl text-white">
                Page : {Paged.currentPaged} of {data?.totalPage || 0}
              </span>
              <button
                className={`p-2 shadow-3xl rounded-xl cursor-pointer ${
                  Paged.currentPaged >= data?.totalPage
                    ? "bg-gray-300  text-gray-500"
                    : "bg-white"
                }`}
                onClick={() => onBtnChangPage("next")}
                disabled={Paged.currentPaged >= data?.totalPage ? true : false}
              >
                Next {">>"}
              </button>
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
