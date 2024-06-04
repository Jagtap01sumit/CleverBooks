import React from "react";
import NavLink from "./NavLink";

export default function MenuOverlay({ links, ClickTaskBtn, ClickLoginBtn }) {
  return (
    <ul className="flex flex-col py-4 items-center bg-white text-black h-screen">
      {links.map((link, index) => (
        <div key={index} className="w-full">
          <li>
            <NavLink href={link.path} title={link.title} />
          </li>
        </div>
      ))}
      <div className="block md:hidden mt-5">
        <div className="flex items-center justify-center flex-col">
          <div className="mx-3">
            <button className="p-4 mx-2" onClick={ClickLoginBtn}>
              Login
            </button>
          </div>
          <div className="ml-3 ">
            <button
              className="py-3 px-6 bg-custom-gradient border border-white rounded-full"
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
