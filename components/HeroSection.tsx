"use client";
import Massage from "./Svg/Massage.jsx";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero-section md:h-[calc(100vh)] mb-7  pt-37 md:pt-17 "
      id="home"
    >
      <div className=" h-full px-4 md:px-7  flex flex-col md:flex-row relative overflow-hidden  justify-between items-center gap-5 ">
        <div className="left-side-content md:w-[60%] flex flex-col items-start lg:w-1/2">
          <div className="cursor-default">
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
            className="pt-6 text-lg leading-6 cursor-default"
          >
            Practical, rigorous, and supportive language training designed
            specifically for ambitious university students and young
            professionals. Elevate your academic and career trajectory today.
          </motion.p>

          <div className="flex gap-4 justify-between md:flex-row flex-col  w-full mt-15">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className=" btn btn-whatsapp !py-3 w-full flex items-center justify-center gap-3 text-[14px] lg:text-[16px] "
            >
              <Massage />
              Register via WhatsApp
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="btn-secondary !py-3 w-full  text-[14px] lg:text-[16px]  "
            >
              Explore Curriculum
            </motion.button>
          </div>
        </div>
        <div className="right-side w-full md:w-[40%] lg:w-1/2 flex justify-center items-center   ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="warrper-img relative w-full  md:w-[450px] h-[350px] md:h-[450px]  !rounded-xl overflow-hidden"
          >
            <Image
              src="/images/ImageIcon.png"
              alt="hero-img"
              fill
              className="object-cover  hero-img"
            />
            <div className="linear"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
