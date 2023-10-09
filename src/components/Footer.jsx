import React from "react";
import logo from "/images/logo.svg";
function Footer() {
    const social = [
        {
          href: "https://www.facebook.com/",
          icon: "/images/icons/Vector.svg",
        },
        {
          href: "https://www.instagram.com/",
          icon: "/images/icons/instagram.svg",
        },
        {
          href: "https://ec.linkedin.com/",
          icon: "/images/icons/linkedin.svg",
        },
        {
          href: "mailto:emipa75@gmail.com",
          icon: "/images/icons/mail.svg",
        }
      ];
      
  return (
    <div className="w-full h-fit py-12 px-12 items-center justify-center flex flex-col bg-[#FFE7F0] gap-5">
      <a href="/">
        <img src={logo} alt="FlawlessLook Logo" />
      </a>
      <div className="flex gap-5">
        {social.map((item,index)=>{
            return(
                <div key={index} className="p-2 footer-link">
                    <a href={item.href} target="_blank"><img src={item.icon} alt="Icons"/></a>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Footer;
