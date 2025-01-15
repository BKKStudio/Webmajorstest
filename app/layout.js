"use client";
import { Roboto } from "next/font/google";
import Navbar from "./Components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/Images/Logocpe/LogoCPE1.png"
          type="image/png"
          sizes="35x35"
        />

        <title>วิศวะคอม ม.รังสิต - CPE Rangsit University</title>
        <meta
          name="title"
          content="วิศวะคอม  ม.รังสิต - CPE Rangsit University"
        />
        <meta
          name="description"
          content="เราไม่ได้เรียนแค่เปลือก แต่เราสอนในเชิงลึกและรอบด้าน ทั้ง Hardware, Software, Network, IoT, AI, Deep Learning ทำงานได้หลากหลาย เช่น Developer, System Engineer, Automation Engineer, DevOps, Network Infrastructure ต้องที่นี่ วิศวกรรมคอมพิวเตอร์ ม.รังสิต"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/Images/Meta.png" />
        <meta
          property="og:title"
          content="วิศวะคอม  ม.รังสิต - CPE Rangsit University"
        />
        <meta
          property="og:description"
          content="เราไม่ได้เรียนแค่เปลือก แต่เราสอนในเชิงลึกและรอบด้าน ทั้ง Hardware, Software, Network, IoT, AI, Deep Learning ทำงานได้หลากหลาย เช่น Developer, System Engineer, Automation Engineer, DevOps, Network Infrastructure ต้องที่นี่ วิศวกรรมคอมพิวเตอร์ ม.รังสิต"
        />
        <meta
          property="og:image"
          content="/Images/Meta.png"
        />

        <meta property="twitter:card" content="/Images/Meta.png" />
        <meta property="twitter:url" content="/Images/Meta.png" />
        <meta
          property="twitter:title"
          content="วิศวะคอม  ม.รังสิต - CPE Rangsit University"
        />
        <meta
          property="twitter:description"
          content="เราไม่ได้เรียนแค่เปลือก แต่เราสอนในเชิงลึกและรอบด้าน ทั้ง Hardware, Software, Network, IoT, AI, Deep Learning ทำงานได้หลากหลาย เช่น Developer, System Engineer, Automation Engineer, DevOps, Network Infrastructure ต้องที่นี่ วิศวกรรมคอมพิวเตอร์ ม.รังสิต"
        />
        <meta
          property="twitter:image"
          content="/Images/Meta.png"
        />
      </head>
      <body className="font-IBM font-medium p-0 m-0 box-border">
        <Navbar />
        <Aside />
        <div className="lg:pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
