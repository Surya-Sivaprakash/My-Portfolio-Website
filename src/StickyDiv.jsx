import React from "react";

function StickyDiv() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-40">
      <div className="border-4 border-[#121212] w-[20rem] h-[20rem] left-[-10.5vw] sftf:left-[-10vw] snine:left-[-20vw] absolute top-1/3  rotate-45 "></div>
      <div className="border-4 border-[#121212] w-[20vw] h-[40vh] absolute top-1/3 right-[-10.5vw] rotate-180 "></div>
    </div>
  );
}

export default StickyDiv;
