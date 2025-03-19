"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  src: require(`../../../public/Images/LearningImg/${i + 1}.png`),
}));

export default function page() {
  return (
    <main className="pt-16 bg-gradient-to-b from-white to-[#991F23] ">
      <article className="w-full h-full mt-12 pb-12 relative flex justify-center items-end ">
        <div className="max-w-6xl w-full max-lg:px-3">
          <div className="w-full flex justify-between items-center pb-2 max-md:flex-col">
            <div className="text-[#991F23] text-2xl font-bold ">
              ภาพบรรยากาศการเรียนการสอน
            </div>
          </div>
          <div className="w-full h-px bg-[#991F23]"></div>
          <div className="my-4 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            {images.map((img) => (
              <Image
                key={img.id}
                src={img.src}
                alt={`Image ${img.id}`}
                className="rounded-xl hover:animate-animation-manu"
              />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
