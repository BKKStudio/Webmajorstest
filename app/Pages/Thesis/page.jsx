"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default function Thesis() {
  const [start, setStart] = useState(0);
  const [Alldata, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [AcademicYear, setAcademicYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://testapiwebmajors.vercel.app/api/thesisRoutes");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const datas = await response.json();
        setAllData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatYears = (year) => {
    const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues
    const academicYearOptions = { year: 'numeric', timeZone: 'Asia/Bangkok' };
    const thaiYearFormatter = new Intl.DateTimeFormat('th-TH', academicYearOptions);
    year = thaiYearFormatter.format(academicYearDate).replace('พ.ศ. ', '');
    return year;
  };

  useEffect(() => {
    let filteredData = Alldata;

    if (AcademicYear) {
      filteredData = filteredData.filter(
        (item) => item.AcademicYear === parseInt(AcademicYear)
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.TitleProject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setData(filteredData.slice(start, start + 16));
  }, [start, Alldata, AcademicYear, searchTerm]);

  const totalPages = Math.ceil((AcademicYear || searchTerm ? data.length : Alldata.length) / 16);
  const currentPage = Math.floor(start / 16) + 1;

  const handlePrev = () => {
    setStart((prevStart) => Math.max(prevStart - 16, 0));
  };

  const handleNext = () => {
    setStart((prevStart) => Math.min(prevStart + 16, (totalPages - 1) * 16));
  };

  const handleYearChange = (event) => {
    setAcademicYear(event.target.value);
    setStart(0); // Reset to first page on filter change
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setStart(0); // Reset to first page on search
  };

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
            <div>
              <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  className="rounded-l-xl bg-gray-300 lg:w-96 w-full text-center py-1"
                  placeholder="ค้นหาปริญญานิพนธ์"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gray-300 py-2 px-3 rounded-r-xl"
                >
                  <BsSearch />
                </button>
              </form>
            </div>
            <div className="flex gap-4">
              <label htmlFor="academicYear" className="sr-only">
                Select Academic Year
              </label>
              <select
                name="academicYear"
                id="academicYear"
                className="text-center bg-gray-300 rounded-xl"
                onChange={handleYearChange}
                value={AcademicYear}
              >
                <option value="">--ปีการศึกษา--</option>
                <option value="2021">2564</option>
                <option value="2020">2563</option>
                <option value="2019">2562</option>
                <option value="2018">2561</option>
                <option value="2017">2560</option>
                <option value="2016">2559</option>
                <option value="2014">2557</option>
              </select>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2 justify-center items-center py-12 gap-5">
            {data.map((item) => (
              <div
                className="bg-white drop-shadow-xl min-w-64 h-72 rounded-xl relative"
                key={item.ID}
              >
                <div className="absolute p-2 text-white flex justify-end w-full">
                  <span className="bg-[#991F23] px-3 rounded-xl text-[12px]">
                    {formatYears(item.AcademicYear)}
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="font-bold text-xl px-3 pt-10 text-center">
                    {item.TitleProject}
                  </div>
                  <div className="w-3/4 h-0.5 bg-black"></div>
                  <div
                    className="text-center flex flex-col justify-between w-full h-full text-sm px-2"
                  >
                    {truncateText(item.Abstract, 100)}
                  </div>
                  <Link
                    href={`/Pages/Thesis/${item.ID}`}
                    className="w-full h-full text-center text-[#991F23]"
                  >
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center pb-5">
            <div className="flex w-80 justify-between items-center">
              <div
                className="p-2 shadow-3xl bg-white rounded-xl cursor-pointer"
                onClick={handlePrev}
              >
                {"<<"} Prev
              </div>
              <span className="font-bold text-xl text-white">
                Page: {currentPage} of {totalPages}
              </span>
              <div
                className="p-2 shadow-3xl bg-white rounded-xl cursor-pointer"
                onClick={handleNext}
              >
                Next {">>"}
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <img src="/Images/Wave/wavemany.png" alt="" />
      </article>
    </main>
  );
}
