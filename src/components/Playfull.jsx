import React, { useState, useEffect } from "react";

function Playfull() {
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
    <div
      className="eyes w-full h-screen overflow-hidden"
      style={{
        position: "relative",
        transform: "translateY(-50px)",
      }}
    >
      <div
        data-scroll
        data-scroll-speed="-.4"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex justify-center gap-12 top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] h-[15vw]">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h4 className="absolute ml-[3.8vw] mt-[3.8vw]">play</h4>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h4 className="absolute ml-[3.8vw] mt-[3.8vw]">play</h4>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playfull;
