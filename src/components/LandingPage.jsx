import { motion } from "framer-motion";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function LandingPage() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-32 px-20">
        {["We Create", "Eye-Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.img
                    src="https://cdn.dribbble.com/userupload/13792909/file/original-4e8ffb82c09220a3e8cb2b267a45412a.png?resize=1024x768"
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.5vw] rounded mt-3 mr-[1vw]"
                  ></motion.img>
                )}
                <h1 className="uppercase xl:leading-[6.5vw] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-24 flex flex-col md:flex-row justify-between items-center py-5 px-20">
        {[
          "For public and private comapnies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-regular tracking-light leading-none flex item-center md:mt-0 mt-6">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-3 mt-6 md:mt-0">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md uppercase font-mono">
            Start the project
          </div>
          <div className="text-3xl flex items-center justify-center">
            <span className="w-1 rotate-[315deg]">
              <IoArrowForwardCircleOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
