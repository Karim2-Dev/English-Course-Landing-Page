"use client";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import { motion } from "framer-motion";
import WhyUs from "@/components/WhyUs/WhyUs";
import QuestionAndAnswer from "@/components/FQA/QuestionAndAnswer";
import ReadyToStart from "@/components/ReadyToStart";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden" id="Home">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "150%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute z-[-1] rotate-12 top-0 right-[-15%] w-[60%] h-[150%] bg-neutral/10 origin-top-right"
        ></motion.div>{" "}
        <HeroSection />
      </div>
      <DescriptionSection />
      <WhyUs />
      <QuestionAndAnswer />
      <ReadyToStart />
    </div>
  );
}
