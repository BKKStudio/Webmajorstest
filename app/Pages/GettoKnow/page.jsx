import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTiktok, FaDiscord } from "react-icons/fa";
import Carousel from "@/app/Components/Carousel";
import Img1 from "@/public/Images/Slide/Slide1.jpg";
import Wave2Rotate from "@/public/Images/Wave/wave2Rotate.png"
import ImgContent1 from "../../../public/Images/Slide/labhardware.png"
import ImgContent2 from "../../../public/Images/Slide/labsoftware.png"
import ImgContent3 from "../../../public/Images/Slide/labnetwork.png"



export default function GettoKnow() {
  return (
    <main className="pt-16 ">
      <article className=" w-full ">
        {/* Slide */}
       <Carousel/>
        {/* Slide */}
        <div className=" w-full h-full">
          <div className=" w-full sm:h-32 max-sm:h-24 absolute flex justify-center items-center max-lg:px-3">
            <div className="max-w-6xl w-full bg-white sm:h-32 max-sm:h-24  rounded-bl-3xl rounded-tr-3xl shadow-3xl flex items-center justify-between gap-2 ">
              <div className=" w-full flex flex-col text-center">
                <span className="text-[#991F23] font-bold text-xl max-sm:text-xs">
                  จบได้ไวสุด
                </span>
                <span className="text-[#626262] font-bold text-2xl max-sm:text-sm">
                  ภายใน 3 ปี ครึ่ง
                </span>
              </div>
              <div className="w-2 h-3/4 bg-[#626262] "></div>
              <div className="w-full flex flex-col text-center">
                <span className="text-[#991F23] font-bold text-xl max-sm:text-xs">
                  ฝึกใช้งาน
                </span>
                <span className="text-[#626262] font-bold text-2xl max-sm:text-sm">
                  อุปกรณ์จริง
                </span>
              </div>
              <div className="w-2 h-3/4 bg-[#626262] "></div>
              <div className="w-full flex flex-col text-center">
                <span className="text-[#991F23] font-bold text-xl max-sm:text-xs">
                  เรียนจบ
                </span>
                <span className="text-[#626262] font-bold text-2xl max-sm:text-sm">
                  มีงานทำแน่นอน
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-16  bg-[#991F23]"></div>
          <div className="w-full h-16  bg-white"></div>
        </div>
      </article>
      <article className="w-full h-full flex justify-center lg:pt-24 max-lg:px-3">
        <div className="max-w-6xl w-full h-full flex justify-between gap-4">
          <div className="w-max h-full flex justify-center ">
            <div className=" flex flex-col gap-2 ">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src="/Images/Logocpe/LogoCPE1.png"
                  width={128}
                  height={128}
                  className=""
                ></Image>
              </div>
              <span className="text-xl font-bold text-center">
                ทำความรู้จักวิศวะคอมพิวเตอร์
              </span>
              <Image
                src={Img1}
                className="d-block w-100"
                alt="..."
              />
              <div className="text-start">
                <span className="font-bold text-lg">ชื่อปริญญา :</span>
                <span>
                  วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์) Bachelor of
                  Engineering (Computer Engineering) วศ.บ. (วิศวกรรมคอมพิวเตอร์)
                  B.Eng. (Computer Engineering)
                </span>
              </div>
              <div className="text-start ">
                <span>
                  วิวัฒนาการ ของคอมพิวเตอร์มีมาอย่างรวดเร็วและต่อเนื่อง
                  ที่ผ่านมาคอมพิวเตอร์มีบทบาทในสังคมไทยเป็นอย่างมาก
                  ได้ขยายตัวไปในกิจการทั้งภาคเอกชนและภาครัฐบาล
                  การรวมกันระหว่างสาขาวิชาวิทยาการคอมพิวเตอร์และวิศวกรรมไฟฟ้าก่อกำเนิดแนว
                  ทางวิทยาการใหม่เป็นวิศวกรรมคอมพิวเตอร์ โดยจะต้องศึกษาถึง
                  สถาปัตยกรรมคอมพิวเตอร์ การออกแบบระบบดิจิตอล การออกแบบวงจรรวม
                  การออกแบบระบบทนต่อความบกพร่อง การออกแบบระบบโครงข่ายคอมพิวเตอร์
                  การออกแบบระบบการประมวลผลแบบกระจาย
                  การออกแบบระบบซอฟต์แวร์อำนวยการ เป็นต้นสาขาวิศวกรรมคอมพิวเตอร์
                  ไม่ได้เป็นสาขาที่ศึกษาเกี่ยวกับฮาร์ดแวร์ของคอมพิวเตอร์เพียงอย่างเดียว
                  แต่นักศึกษาสาขาวิศวกรรมคอมพิวเตอร์จะต้องศึกษาถึงการออกแบบและใช้งานระบบ
                  ฮาร์ดแวร์และซอฟต์แวร์ควบคู่กันไป
                  เพื่อที่จะสามารถนำวิทยาการมาประยุกต์กับวิชาชีพทางด้านนี้อย่างแท้จริง
                </span>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  วัตถุประสงค์หลักสูตร
                </span>
                <span>
                  1.
                  เป็นหลักสูตรปริญญาตรีที่เน้นการศึกษาด้านวิศวกรรมคอมพิวเตอร์ทั้งฮาร์ดแวร์และซอฟต์แวร์
                </span>
                <span>
                  2. เป็นหลักสูตรที่เน้นถึงการนำวิทยาการไปใช้จริง
                  ในอุตสาหกรรมภายในประเทศไทย
                </span>
                <span>
                  3.
                  เป็นหลักสูตรที่สอดคล้องกับมาตราฐานสากลด้านวิศวกรรมคอมพิวเตอร์
                </span>
                <span>
                  4. เพื่อผลิตบัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ที่สามารถทำงาน
                  เป็นวิศวกรคอมพิวเตอร์ที่มีความเชี่ยวชาญทั้งฮาร์ดแวร์และซอฟต์แวร์และสามารถออกแบบระบบคอมพิวเตอร์เพื่อการใช้งานได้
                </span>
                <span>
                  5. เพื่อผลิตบัณฑิตที่มีความพร้อมทางวิชาการ
                  ศึกษาต่อในระดับปริญญาโทและเอก ภายในประเทศและต่างประเทศ
                </span>
                <span>
                  6. เพื่อผลิตบัณฑิตที่มีความรู้ทางด้านวิชาชีพ
                  และมีจริยธรรมในการทำงานและคุณธรรมในการดำรงชีวิต
                </span>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  แนวทางประกอบอาชีพ
                </span>
                <span>
                  1.อาชีพด้านราชการ ตัวอย่างเช่น นักวิชาการคอมพิวเตอร์
                  วิศวกรคอมพิวเตอร์ เป็นต้น
                </span>
                <span>
                  2. อาชีพด้านรัฐวิสาหกิจ ตัวอย่างเช่น
                  นักวิเคราะห์และออกแบบระบบคอมพิวเตอร์ ผู้ดูแลระบบเครือข่าย
                  วิศวกรที่ปรึกษา เป็นต้น
                </span>
                <span>
                  3. อาชีพด้านบริษัทเอกชน ตัวอย่างเช่น นักโปรแกรม
                  ผู้จัดการโครงการคอมพิวเตอร์ นักพัฒนาเว็บไซต์
                  ผู้จัดการซอฟต์แวร์ เป็นต้น
                </span>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  คุณสมบัติของผู้เข้าศึกษา
                </span>
                <ul className="list-disc">
                  <li>เป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลายหรือเทียบเท่า</li>
                  <li>
                    เป็นผู้สำเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูงหรือเทียบเท่า
                    หรืออนุปริญญา
                  </li>
                  <li>
                    ผ่านการคัดเลือกตามเกณฑ์ของสำนักคณะกรรมการการอุดมศึกษาและ/หรือเป็นไปตามข้อบังคับ
                    ประกาศเกี่ยวกับการคัดเลือกนักศึกษาของมหาวิทยาลัยรังสิต
                  </li>
                  <li>
                    ไม่เป็นผู้ที่มีความประพฤติเสื่อมเสีย
                    หรือถูกไล่ออกจากสถาบันอุดมศึกษาใด ๆ เพราะความผิดทางวินัย
                  </li>
                  <li>
                    ไม่เป็นโรคติดต่อร้ายแรงหรือโรคที่เป็นอุปสรรคต่อการศึกษา
                  </li>
                  <li>
                    ไม่เคยต้องโทษจำคุก
                    เว้นแต่ความผิดอันได้กระทำโดยประมาทหรือความผิดอันเป็นลหุโทษ
                  </li>
                </ul>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  ระบบการศึกษา
                </span>
                <span>
                  ใช้ระบบการศึกษาแบบทวิภาค โดย 1 ปีการศึกษาแบ่งออกเป็น 2
                  ภาคการศึกษาปกติ โดยที่ 1
                  ภาคการศึกษาปกติมีระยะเวลาศึกษาไม่น้อยกว่า 15 สัปดาห์
                  และอาจมีภาคฤดูร้อนอีก 1 ภาคการศึกษาก็ได้
                  ซึ่งมีระยะเวลาศึกษาไม่น้อยกว่า 6 สัปดาห์
                </span>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  การสำเร็จการศึกษา
                </span>
                <ul className="list-disc">
                  <li>สำเร็จการศึกษาได้ก่อน 6 ภาคการศึกษาปกติ</li>
                  <li>เรียนครบตามจำนวนหน่วยกิตที่กำหนดไว้ในหลักสูตร</li>
                  <li>
                    ระดับคะแนนเฉลี่ยสะสมไม่ต่ำกว่า 2.00
                    และระดับคะแนนเฉลี่ยสะสมวิชาเฉพาะไม่ต่ำกว่า 2.00
                    (จากระดับสูงสุดที่ 4.00)
                  </li>
                </ul>
              </div>
              <div className="flex flex-col  w-full">
                <span className="font-bold text-xl text-center">
                  ทุนการศึกษา
                </span>
                <ul className="list-disc">
                  <li>ทุนโครงการสู่ วศ.บ. จำนวน 2 ทุน/ปี</li>
                  <li>เทุนดร.อาทิตย์ อุไรรัตน์ จำนวน 2 ทุน/ปี</li>
                  <li>ทุนประสิทธิ์-คุณหญิงพัฒนา จำนวน 6 ทุน/ปี</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-40 max-lg:hidden    w-full h-full relative ">
            <div className="h-full  ">
              <div className="flex gap-2 w-max ">
                <span className="font-semibold">ช่องทางติดต่อสาขา</span>
                <Link href={"https://www.facebook.com/CPE.RSU"}>
                  {" "}
                  <FaFacebookF size={15} className="text-gray-600" />
                </Link>
                <Link href={"https://www.youtube.com/@RangsitUniversity"}>
                  {" "}
                  <FaYoutube size={15} className="text-gray-600" />
                </Link>
                <Link href={"https://www.youtube.com/@RangsitUniversity"}>
                  {" "}
                  <FaTiktok size={15} className="text-gray-600" />
                </Link>
              </div>
              <div className=" w-[320px] h-[232px] bg-[#FFDDDE] rounded-r-3xl w-full  mt-1 shadow-xl flex">
                <div className="w-1 h-full bg-[#991F23]"></div>
                <div className="flex  flex-col justify-between py-3 px-2 ">
                  <span>ชื่อปริญญา</span>
                  <span>วัตถุประสงค์หลักสูตร</span>
                  <span>แนวทางประกอบอาชีพ</span>
                  <span>คุณสมบัติของผู้เข้าศึกษา</span>
                  <span>ระบบการศึกษา</span>
                  <span>การสำเร็จการศึกษา</span>
                  <span>ทุนการศึกษา</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-gray-100 ">
        <Image src={Wave2Rotate} alt="" />
        <div className="flex justify-center w-full py-12">
          <div className=" max-w-6xl w-full flex flex-col justify-center">
            <div className="text-center text-xl text-[#838383]">
              เรียนอะไรบ้าง?
            </div>
            <div className="text-center text-3xl font-bold text-[#991F23]">
              วิศวะคอมพิวเตอร์
            </div>
            <div className="text-center text-base font-bold ">
              สาขาที่สายงานกว้าง วางแผนอนาคตกับสิ่งที่ใช่!!{" "}
            </div>
            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1  w-full justify-center ">
              <div className="flex flex-col lg:px-24 px-6 mt-4">
                <span className="w-full bg-[#991F23] text-center text-white py-2 rounded-t-2xl">
                  Industrial Internet of Things 
                </span>
                <img src="" alt="" />
              </div>
              <div className="flex flex-col lg:px-24 px-6 mt-4">
                <span className="w-full bg-[#991F23] text-center text-white py-2 rounded-t-2xl">
                  Hardware 
                </span>
                <Image src={ImgContent1} alt="" />
              </div>
              <div className="flex flex-col lg:px-24 px-6 mt-4">
                <span className="w-full bg-[#991F23] text-center text-white py-2 rounded-t-2xl">
                  Software 
                </span>
                <Image src={ImgContent2} alt="" />
              </div>
              <div className="flex flex-col lg:px-24 px-6 mt-4">
                <span className="w-full bg-[#991F23] text-center text-white py-2 rounded-t-2xl">
                  Network
                </span>
                <Image src={ImgContent3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
