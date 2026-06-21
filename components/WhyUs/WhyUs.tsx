import React from "react";
import Card from "./Card";
import Bag from "../Svg/Bag";
import Hat from "../Svg/Hat";
import Clock from "../Svg/Clock";
import Chat from "../Svg/Chat";
import { motion } from "framer-motion";
interface iCardData {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}
const cardsData: iCardData[] = [
  {
    title: "Career-Focused Curriculum",
    description:
      "Tailored modules covering professional email writing, meeting negotiations, and industry-specific vocabulary.",
    icon: <Bag />,
    color: "secondary",
  },
  {
    title: "Flexible Online Learning",
    description:
      "Access high-quality lessons anytime, anywhere, fitting perfectly around your university or work schedule.",
    icon: <Clock />,
    color: "orange",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from rigorously vetted, native-level professionals dedicated to your academic and professional success.",
    icon: <Hat />,
    color: "secondary",
  },
  {
    title: "Community Support",
    description:
      "Join a network of ambitious peers. Practice together, share insights, and build global connections.",
    icon: <Chat />,
    color: "orange",
  },
];

export default function WhyUs() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="why-us px-5 py-10 flex items-center flex-col justify-center gap-1.5 cursor-default"
      id="why-us"
    >
      <h1 className="mb-5 text-2xl">Why Choose English Start?</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {cardsData.map((card, index) => (
          <Card
            color={card.color}
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </motion.div>
  );
}
