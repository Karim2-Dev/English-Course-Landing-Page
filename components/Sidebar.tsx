"use client";
import { useSidebarStore } from "@/store/useLayoutStore";
import CloseIcon from "./Svg/Close";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <nav
      className={`fixed inset-y-0 right-0 w-60 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} md:hidden bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out`}
    >
      <div className="container  h-full flex flex-col gap-6 py-7">
        <div className="px-7 flex items-center justify-between w-full pb-2">
          <h2>English Course</h2>
          <button
            className="flex md:hidden cursor-pointer"
            onClick={() => toggleSidebar()}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="w-full border-b-1 border-neutral-200"></div>
        <ul className="px-7 flex flex-col gap-6 navigation-links ">
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
      </div>
    </nav>
  );
}

export default Sidebar;
