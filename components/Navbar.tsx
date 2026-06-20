"use client";
import MenuIcon from "./Svg/Menu";
import { useSidebarStore } from "@/store/useLayoutStore";

export default function Navbar() {
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className=" w-full h-17 shadow-sm px-10 fixed z-10 top-0 bg-white ">
      <div className="container flex items-center justify-between h-full ">
        <h1 className="text-xl fw-bolder">English Course</h1>

        {/* Pc & Tablet */}
        <ul className="flex gap-6 navigation-links hidden md:flex">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#courses">
            <li>Courses</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>

        <button className="btn-whatsapp btn hidden md:flex">
          Register Now
        </button>

        {/* Mobile */}
        <button
          className="flex md:hidden cursor-pointer"
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}
