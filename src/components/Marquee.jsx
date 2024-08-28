import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-14 rounded-t-3xl bg-[#004D43]"
    >
      <div className="text text-[#e7af08] text-[20vw] uppercase border-t-2 border-b-2 border-zinc-100 flex tracking-tighter whitespace-nowrap font-bold leading-none overflow-hidden border-opacity-15">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="mb-[1vw] -mt-[1vw] pr-[5vw]"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="mb-[1vw] -mt-[1vw] pr-[5vw]"
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
