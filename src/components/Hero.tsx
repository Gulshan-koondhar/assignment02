import Image from "next/image";
import React from "react";
import governor from "@/../public/cover.1d863e39.png";

const Hero = () => {
  return (
    <section className="relative  text-center py-24 md:py-20 h-full">
      <div className="bg-[url('/bg_house.jpg')] bg-cover bg-opacity-75 lg:flex hidden w-full absolute top-0 h-full -z-20"></div>
      <div className="bg-gray-100 bg-opacity-50 lg:flex hidden w-full absolute top-0 h-full -z-10"></div>
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-start">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#044E83] leading-10 tracking-wider">
            Governor Sindh
          </h1>
          <h2 className="text-3xl tracking-wider text-[#044E83] font-medium mt-2">
            Kamran Khan Tessori
          </h2>
          <p className="text-[1.5rem] text-[#2EB6E8] lg:text-[2.5rem] tracking-wider font-semibold mt-4">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </p>
          <p className="text-[#044E83] mt-2 font-extrabold text-[1.5rem] sm:text-2xl">
            Earn up to $5,000/month
          </p>
          <p className="text-[#044E83] tracking-wider font-bold text-[1.5rem] sm:text-2xl md:w-[80%]">
            Now admissions are open in Hyderabad
          </p>
          <div className="mt-6 flex gap-5">
            <button className="bg-[#044E83] hover:bg-blue-900 text-white py-3 sm:py-1 md:w-52 px-6 rounded-lg font-semibold transition duration-300">
              APPLY NOW
            </button>
            <div className="text-[#044E83]  mt-4 text-center">
              <span className="font-extrabold tracking-widest sm:text-3xl text-xl">
                562,143
              </span>
              <p className=" font-bold ">Accepted Applications</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center h-full">
          <Image
            src={governor} // Replace with actual path to the image
            alt="Kamran Khan Tessori"
            width={800}
            height={600}
            className="w-[500px] h-[400px] sm:w-[800px] sm:h-[600px] items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
