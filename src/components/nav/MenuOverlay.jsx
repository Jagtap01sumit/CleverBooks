import React from "react";
import NavLink from "./NavLink";

export default function MenuOverlay({ links, ClickTaskBtn, ClickLoginBtn }) {
  return (
    <ul className="flex flex-col py-4 items-center bg-white text-black h-screen">
      {links.map((link, index) => (
        <div key={index} className="w-full">
          <li className="md:text-3xl text-black">
            <NavLink href={link.path} title={link.title} />
          </li>
        </div>
      ))}
      <div className="block lg:hidden mt-5">
        <div className="flex items-center transition-all duration-300 hover:text-white justify-center flex-col">
          <div className="mx-3">
            <button className="p-4 mx-2" onClick={ClickLoginBtn}>
              Login
            </button>
          </div>
          <div className="ml-3 ">
            <button
              className="py-3 px-6 bg-custom-gradient transition-all duration-300 hover:text-black border border-white rounded-full"
              onClick={ClickTaskBtn}
            >
              Task to Us
            </button>
          </div>
        </div>
      </div>
    </ul>
  );
}
