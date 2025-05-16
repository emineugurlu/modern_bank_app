import React, { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full flex py-6 justify-between items-center bg-primary px-6">
  <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

  {/* Masaüstü ve tablet için klasik navbar (sm ve üstü için göster) */}
  <ul className="list-none hidden sm:flex flex-row gap-10 text-white flex-1 justify-end">
    {navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`cursor-pointer text-[16px] font-poppins ${
          active === nav.title ? "text-white" : "text-dimWhite"
        }`}
        onClick={() => setActive(nav.title)}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>

  {/* Mobil görünüm için hamburger menü (sm altı için göster) */}
  <div className="sm:hidden flex justify-end items-center flex-1">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain cursor-pointer"
      onClick={() => setToggle((prev) => !prev)}
    />

    {/* Hamburger menü açılır */}
    <div
      className={`${
        toggle ? "flex" : "hidden"
      } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50 flex-col gap-4`}
    >
      {navLinks.map((nav) => (
        <a
          key={nav.id}
          href={`#${nav.id}`}
          className={`text-[16px] font-poppins ${
            active === nav.title ? "text-primary" : "text-white"
          }`}
          onClick={() => {
            setActive(nav.title);
            setToggle(false);
          }}
        >
          {nav.title}
        </a>
      ))}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
