"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DocumentPage() {
  const [data, setdata] = useState([]);
  const Domain = process.env.DOMAIN;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${Domain}api/documents/get-all-documents`
      );
      setdata(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const formatYears = (year) => {
    return year + 543;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const convertBase64ToBlob = (base64String, mimeType = "application/pdf") => {
    try {
      const cleanedBase64 = base64String.replace(
        /^data:application\/pdf;base64,/,
        ""
      );
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      return new Blob([byteNumbers], { type: mimeType });
    } catch (error) {
      console.error("❌ Error converting base64 to Blob:", error);
      return null;
    }
  };

  const convertFileToBlobUrl = (base64String) => {
    const blob = convertBase64ToBlob(base64String);
    return blob ? URL.createObjectURL(blob) : null;
  };

  if (!data) {
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
    <main className="py-24 bg-gradient-to-b from-white to-[#991F23] w-full h-full flex justify-center">
      <article className="max-w-6xl w-full flex flex-col">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full text-[#991F23] flex flex-col gap-4">
            <span className="text-3xl">ดาวน์โหลดเอกสาร</span>
            <div className="w-full h-0.5 bg-[black]"></div>
          </div>
        </div>
        <div className=" pt-4 w-full">
          <div className="">
            <div className="w-full  rounded-lg flex justify-between  gap-3">
              {data.map((item) => (
                <div
                  key={item.ID}
                  className="bg-white w-full h-full flex justify-between shadow-3xl"
                >
                  <div className="p-4">
                    <div className="font-bold text-xl max-sm:text-base">
                      หลักสูตรปี {formatYears(item.Year)}
                    </div>
                    <ul className="list-disc pl-8">
                      <li
                        className="cursor-pointer  hover:underline"
                      >
                        <a
                          href={convertFileToBlobUrl(item.rsu_36_base64)}
                          target="_blank"
                          className="text-blue-600 font-semibold text-lg"
                        >
                          มรส.36
                        </a>
                      </li>
                      <li
                        className="cursor-pointer hover:underline"
                      >
                          <a
                          href={convertFileToBlobUrl(item.rsu_subject_base64)}
                          className="text-blue-600 font-semibold text-lg"
                          target="_blank"
                        >
                          ความสัมพันธ์รายวิชา
                        </a>
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
