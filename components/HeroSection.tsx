"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:h-[calc(100vh-68px)] mt-17"
    >
      <div className=" h-full px-4 md:px-7  flex flex-col md:flex-row relative overflow-hidden  justify-between items-center gap-5 ">
        <div className="left-side-content flex flex-col items-start md:w-1/2">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:text-5xl text-4xl fw-bold "
            >
              Master English,{" "}
              <span className=" fw-bold !text-secondary">
                Start Your Global Career
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-6 text-lg leading-6"
          >
            Practical, rigorous, and supportive language training designed
            specifically for ambitious university students and young
            professionals. Elevate your academic and career trajectory today.
          </motion.p>

          <div className="flex gap-4 justify-between md:flex-row flex-col  w-full mt-15">
            <button className="btn btn-whatsapp w-full">
              Register via WhatsApp
            </button>
            <button className="btn-secondary w-full  ">
              Explore Curriculum
            </button>
          </div>
        </div>
        <div className="right-side w-full md:w-1/2 flex justify-center items-center   ">
          <div className="image relative w-full  md:w-[450px] h-[350px] md:h-[450px]  ">
            <Image
              src="/images/ImageIcon.png"
              alt="hero-img"
              fill
              className="object-cover !rounded-xl "
            />
          </div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "150%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute z-[-1] rotate-12 top-0 right-[-15%] w-[60%] h-[150%] bg-neutral/10 origin-top-right"
        ></motion.div>{" "}
      </div>
    </motion.section>
  );
}
