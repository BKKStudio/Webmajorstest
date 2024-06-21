"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import imgBuilding1 from "../../../public/Images/Building5/1.jpg";
import imgBuilding2 from "../../../public/Images/Building5/2.jpg";
import imgBuilding3 from "../../../public/Images/Building5/3.jpg";

export default function DocumentPage() {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://testapiwebmajors.vercel.app/api/documents",
        {
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const datas = await response.json();
      setdata(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  const [newDocument, setNewDocument] = useState({
    Year: "",
    rsu36: "",
    subjectRelation: "",
  });

  const fetchDataByID = async (id) => {
    try {
      const response = await fetch(
        `https://testapiwebmajors.vercel.app/api/documents/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const datas = await response.json();
      // แปลง Year ให้เป็น พ.ศ.

      setNewDocument(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchPDF = async (fileName) => {
    try {
      const response = await fetch(
        "https://testapiwebmajors.vercel.app/send-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fileName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <main className="py-24 bg-gradient-to-b from-white to-[#991F23] w-full flex justify-center">
      <article className="max-w-6xl w-full flex flex-col">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full text-[#991F23] flex flex-col gap-4">
            <span className="text-3xl">ดาวน์โหลดเอกสาร</span>
            <div className="w-full h-0.5 bg-[#991F23]"></div>
            <div className="grid grid-cols-3 w-full h-full max-lg:grid-cols-1 max-lg:px-4 ">
              <Image src={imgBuilding1} alt="" className="w-full h-full" />
              <Image src={imgBuilding2} alt="" className="w-full h-full" />
              <Image src={imgBuilding3} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex  pt-4 w-full">
          <div className="">
            <div className="w-full rounded-lg grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-lg:px-4">
              {data.map((item) => (
                <div
                  key={item.ID}
                  className="bg-white flex justify-between shadow-3xl"
                >
                  <div className="p-4">
                    <div className="font-bold text-xl max-sm:text-base">
                      หลักสูตรปี {formatYears(item.Year)}
                    </div>
                    <ul className="list-disc pl-8">
                      <li
                        onClick={() => fetchPDF(item.rsu36)}
                        className="cursor-pointer  hover:underline"
                      >
                        <span className="text-blue-500">มรส.36</span>
                      </li>
                      <li
                        onClick={() => fetchPDF(item.subjectRelation)}
                        className="cursor-pointer hover:underline"
                      >
                        <span className="text-blue-500">
                          {" "}
                          ความสัมพันธ์รายวิชา
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
