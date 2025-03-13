import React from "react";
import Image from "next/image";
import Link from "next/link";
import Imgcontetn3 from "../../../public/Images/rsucontent/3.jpg";
import Imgcontetn4 from "../../../public/Images/rsucontent/4.jpg";
import Imgcontetn5 from "../../../public/Images/rsucontent/5.jpg";
import Imgcontetn6 from "../../../public/Images/rsucontent/6.jpg";

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
          <div className="my-4 flex lg:justify-around justify-center   max-lg:flex-wrap">
            <Image
              src={Imgcontetn3}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
            <div className="flex gap-4 justify-around max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={Imgcontetn4}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
          </div>
          <div className="max-lg:hidden my-4 flex lg:justify-around justify-center  gap-4 max-lg:flex-wrap">
            <div className="flex gap-4 justify-between max-lg:flex-wrap max-lg:justify-center">
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu"
              />
              <Image
                src={Imgcontetn5}
                alt=""
                className="rounded-xl hover:animate-animation-manu lg:hidden"
              />
            </div>
            <Image
              src={Imgcontetn6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
          <div className="lg:hidden my-4 flex lg:justify-between justify-center  gap-4 max-lg:flex-wrap">
            <Image
              src={Imgcontetn6}
              alt=""
              className="rounded-xl hover:animate-animation-manu"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
