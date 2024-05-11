import React from "react";
import Button from "./Button";

const Navbar = () => {
  const navItem = ["Home", "Work", "About", "News"];
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between  ">
      <div className="leftside flex items-center justify-center">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="Logo"
      />
      <div className="flex gap-14 ml-20">
        {navItem.map((elem, index) => (
          <a key={index} href="#" className="font-medium text-sm flex items-center gap-[3px]">
            
                {index === 1 && (
                  <span style={{ boxShadow: "0 0 0.55em #00FF19" }} className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"></span>
                )}
                {elem}
          </a>
        ))}  
      </div>
      </div>
      <Button/>
      
    </div>
  );
};

export default Navbar;
