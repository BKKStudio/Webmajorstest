"use client";
import React from "react";
import { BsXLg } from "react-icons/bs";
import Logolight from "@/public/Images/Logo/Logolight.png";
import Image from "next/image";
import { useState } from "react";

import Swal from "sweetalert2";

export default function DetailModal({ LoginOpen, setLoginOpen }) {

 if(productBYid != null){
  return (
    <React.Fragment>
      {/* //BackDrop */}
      
      <div
        className={`fixed w-full  h-screen  inset-0 z-110 flex justify-center  transition-colors z-50 ${
          LoginOpen ? "visible bg-black/60" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          className={`max-w-5xl w-full  transition-all mt-8  flex flex-col gap-8 max-lg:px-5 ${
            LoginOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <button
                className="p-3 rounded-full bg-white"
                onClick={() => {
                  setLoginOpen(false);
                  setProductByid(null)
                }}
              >
                <BsXLg />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-xl w-full bg-white flex justify-center rounded-xl py-12">
              <div className="flex flex-col gap-3">
              <span className="text-center flex justify-center text-2xl font-bold">รายละเอียดสินค้า</span>
                <div className="flex justify-center">
                  <img
                    src={productBYid.img}
                    alt=""
                    width={300}
                    height={300}
                    className="w-max shadow-2xl rounded-xl "
                  ></img>
                </div>
                <span className="mt-5 text-xl font-bold flex">ชื่อสินค้า:  <div className="font-medium ">{productBYid.title}</div></span>
                <span className=" text-xl font-bold flex">ราคาสินค้า:  <div className="font-medium ">{productBYid.price}฿</div></span>
                <span className=" text-xl font-bold flex">รายละเอียดสินค้า:</span>
                <div className="font-medium text-xl">{productBYid.detail}</div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
 }
}