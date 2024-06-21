import React from "react";
import Image from "next/image";
import Img1 from "../../public/Images/Slide/Slide1.jpg";
import Img2 from "../../public/Images/Slide/Imgslide/labhardware1.png";
import Img3 from "../../public/Images/Slide/Imgslide/labnetwork1.png";
import Img4 from "../../public/Images/Slide/Imgslide/labsoftware1.png";

export default function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <Image src={Img1} className="d-block w-100" alt="All Learn" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <Image src={Img2} className="d-block w-100" alt="Labhardware" />
        </div>
        <div className="carousel-item">
          <Image src={Img3} className="d-block w-100" alt="Labnetwork" />
        </div>
        <div className="carousel-item">
          <Image src={Img4} className="d-block w-100" alt="labsoftware" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
