import React, { useState, useEffect } from "react";

function ReadyToStart() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-[#cdea68] relative">
      <div className="text-center">
        <h1 className="text-[10vw] font-bold text-black leading-none">
          READY
          <br />
          TO START
          <br />
          THE PROJECT?
        </h1>
        <div className="game">
          <div className="absolute flex justify-center gap-12 top-[2vw] left-1/2 -translate-y-[50%] -translate-x-[50%] h-[15vw]">
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
              <div className="black relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <h4 className="absolute ml-[3.8vw] mt-[3.8vw]">play</h4>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="white w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
              <div className="black relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <h4 className="absolute ml-[3.8vw] mt-[3.8vw]">play</h4>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="white w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Project Button */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <button className="bg-black text-white text-lg font-mono py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
          <a href="#">Start Project</a>
        </button>
      </div>
    </div>
  );
}

export default ReadyToStart;
