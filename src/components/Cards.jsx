import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-[#cdea68] flex items-center px-[6vw] py-[8vw] gap-[2.6vw]">
      <div className="cardcont w-1/2 h-[60vh]">
        <div className="card relative w-full h-full rounded-[1.04vw] bg-[#004D43] flex items-center justify-center">
          <img
            className="w-[9vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute text-[1.2vw] px-[0.4vw] py-[0.1vw] border-[0.1vw] left-[2.08vw] bottom-[1.25vw] rounded-full font-extralight text-[#cdea68] border-[#cdea68]">
            &copy;29389
          </button>
        </div>
      </div>
      <div className="cardcont w-1/2 h-[60vh] flex gap-[2.6vw]">
        <div className="card relative w-full h-full rounded-[1.04vw] bg-[#080b0b] flex items-center justify-center">
          <img
            className="w-[9vw]"
            src="https://cdn.dribbble.com/userupload/15737141/file/original-3e386a37175caeec8136fa9045b336e8.png?resize=1504x1127"
          ></img>
          <button className="absolute text-[1vw] px-[0.42vw] py-[0.21vw] border-[0.1vw] left-[1vw] bottom-[1.25vw] rounded-full font-extralight">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-full h-full rounded-[1.04vw] bg-[#080b0b] flex items-center justify-center">
          <img
            className="w-[6vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          ></img>
          <button className="absolute text-[1vw] px-[0.42vw] py-[0.21vw] border-[0.1vw] left-[1vw] bottom-[1.25vw] rounded-full font-extralight">
            BUSINESS ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
