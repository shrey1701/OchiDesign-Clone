import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  // Track hover state for each card container
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="w-full py-[5vw]">
      <div className="w-full px-[2.5vw]">
        <h1 className="text-[4.5vw] ml-[3vw] tracking-tighter font-light">
          Featured Projects
        </h1>
        <div className="max-w-full border-t-[0.05vw] border-[#585857] mt-[3vw] flex-col"></div>
        <div className="cards w-full flex gap-[2.5vw] mt-[10vw]">
          <div
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[40vw] overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-[5.5vw] text-[#cdea68]">
              {"DEXPRESS".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverIndex === 0 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://cdn.dribbble.com/userupload/15065187/file/original-7bee788a98b03d4ec8fa7c6d208d59d5.jpg?resize=1504x1128"
              />
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[40vw] overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-[5.5vw] text-[#cdea68]">
              {"MINDS".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverIndex === 1 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://cdn.dribbble.com/userupload/13380763/file/original-375ab574027dab4503c466494c030e14.jpg?resize=1024x768"
              />
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-[2.5vw] mt-[10vw]">
          <div
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[40vw] overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-[5.5vw] text-[#cdea68]">
              {"SPACESHIP".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverIndex === 2 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              />
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cardcontainer relative w-1/2 h-[40vw] overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-[5.5vw] text-[#cdea68]">
              {"CHIMI".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoverIndex === 3 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://cdn.dribbble.com/userupload/14741496/file/original-6f9ded7d5e84f1cff4d5df1b22896a71.jpg?resize=1504x1504&vertical=center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
