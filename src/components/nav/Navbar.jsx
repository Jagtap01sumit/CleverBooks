import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
export default function Navbar() {
  const navLinks = [
    {
      title: "Product",
      ath: "/",
    },
    {
      title: "Pricing",
      path: "/",
    },
    {
      title: "Industry",
      path: "/",
    },

    {
      title: "Customers Stories",
      path: "/",
    },
    {
      title: "About",
      path: "#contactSection",
    },
    {
      title: "Blogs",
      path: "/",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ClickTaskBtn = () => {
    console.log("click Task Button");
  };
  const ClickLoginBtn = () => {
    console.log("Click Login Button");
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav
      id="navbar"
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-75  transition-all duration-300 "
    >
      <div className="flex flex-row container lg:py-2 flex-wrap items-center justify-between mx-auto lg:px-32 py-2 text-white px-4">
        <div>Logo</div>
        <div className=" mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3  py-2 border rounded border-slate-200 text-slate-200 hover:text-white hove:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hove:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row  md:space-x-8 mt-0 text-white ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {!navbarOpen && (
          <div className="hidden lg:block">
            <div className="flex items-center justify-center ">
              <div className="mx-3 ">
                <button className="p-4 mx-2  " onClick={ClickLoginBtn}>
                  <h1 className="bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent hover:text-white transition-all duration-300">
                    Login
                  </h1>
                </button>
              </div>
              <div className="ml-3">
                <button
                  className="py-3 transition-all duration-300 px-6 bg-custom-gradient hover:text-black border border-white rounded-full"
                  onClick={ClickTaskBtn}
                >
                  Task to Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          ClickLoginBtn={ClickLoginBtn}
          ClickTaskBtn={ClickTaskBtn}
        />
      ) : null}
    </nav>
  );
}
