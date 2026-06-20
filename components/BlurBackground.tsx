"use client";
import { useSidebarStore } from "@/store/useLayoutStore";

export default function BlurBackground() {
  const { isSidebarOpen } = useSidebarStore();
  return (
    <div
      className={
        isSidebarOpen
          ? "absolute w-full h-full  inset-0 transition-all  bg-black/20 backdrop-blur-xs z-40 md:hidden "
          : "opacity-0 transition-opacity duration-200 ease-in-out"
      }
    ></div>
  );
}
