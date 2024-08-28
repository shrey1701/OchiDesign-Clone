import React from "react";

function Footer() {
  return (
    <div className="relative">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.5"
        className="relative w-full bg-zinc-900 flex"
      >
        <div className="w-1/2 h-full flex flex-col justify-between py-[6vw] px-[3vw]">
          <div className="uppercase font-mono font-semibold tracking-tighter leading-none text-[7vw]">
            <h1>Eye-</h1>
            <h1>Opening</h1>
          </div>
          <img
            className="logo w-[4vw] ml-[1vw] mt-[23vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo"
          />
        </div>

        <div className="w-1/2">
          <div className="uppercase font-mono font-semibold tracking-tighter leading-none text-[7vw] py-[6vw]">
            <h1>Presentations</h1>
          </div>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <a key={index} href="#" className="font-light block text-[1.5vw]">
                {item}
              </a>
            )
          )}
          <div className="flex justify-between py-[8vw]">
            <div>
              {[
                "202-1965 W 4th Ave",
                "Vancouver, Canada",
                "#30 Chukarina ST",
                "Lviv, Ukraine",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-light block text-[1.5vw]"
                >
                  {item}
                </a>
              ))}
            </div>
            <div>
              {["Home", "Services", "Our Work", "About Us"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-light block px-[10vw] text-[1.5vw]"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
