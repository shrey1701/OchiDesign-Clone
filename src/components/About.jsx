import React from "react";
import { FaDotCircle } from "react-icons/fa";

function About() {
  return (
    <div
      className="relative w-full py-[6vw] px-[1vw] bg-[#cdea68] rounded-t-3xl text-black font-regular tracking-tighter"
      style={{
        position: "relative",
        transform: "translateY(-50px)",
      }}
    >
      <h1 className="text-[4.5vw] -mt-[0.5vw] ml-[4vw] mr-[2vw] leading-[4.5vw] tracking-tighter">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="max-w-6xl border-t-[1px] border-[#607419] mt-[4vw] ml-[3vw] flex">
        <div className="w-1/2 mt-[3vw]">
          <h1 className="text-[3.8vw] mb-[1.5vw] tracking-tight font-semibold">
            Our Approach
          </h1>
          <button className="px-[2.5vw] py-[1.5vw] bg-zinc-900 rounded-full text-white leading-none flex">
            <a href="#">Read More</a>
            <div className="ml-[1vw] -mr-[1vw] -mt-[0.5vw]">
              <FaDotCircle />
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[28vw] mt-[4vh] mr-[2vw] ml-[5vw] -mb-[2vw]">
          <video
            className="w-full h-full rounded-3xl object-cover"
            src="https://cdn.dribbble.com/userupload/15508028/file/original-d60653d9e04a715ffc7743b58b992187.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}

export default About;
