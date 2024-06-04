import React from "react";
import logo from "/images/logo.svg";
function Footer() {
  return (
    <div className="w-full h-fit py-8 px-12 items-end flex flex-col">
      <a href="/">
        <img src={logo} alt="Logo" className="w-8" />
      </a>
    </div>
  );
}

export default Footer;
