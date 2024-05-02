import React from "react";
import logo from "/images/logo.svg";
function Footer() {
  return (
    <div className="w-full h-fit py-12 px-12 items-center justify-center flex flex-col bg-[#202020] gap-5 rounded-md">
      <a href="/">
        <img src={logo} alt="Logo" className="w-16 filter-white" />
      </a>
    </div>
  );
}

export default Footer;
