import React from "react";
import { motion } from "framer-motion";

export default function Card({
  color,
  title,
  description,
  icon,
}: {
  color: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const colorClasses: Record<string, string> = {
    orange: "border-t-orange",
    secondary: "border-t-secondary ",
  };
  const background: Record<string, string> = {
    orange: " bg-orange/20",
    secondary: "bg-secondary/20",
  };

  const selectedClass = colorClasses[color] || colorClasses.secondary;
  const selectBackground = background[color] || colorClasses.secondary;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      className={`card  ${selectedClass} border-t-4 rounded-lg shadow-md`}
    >
      <div className="container p-6">
        <div className={`icon ${selectBackground} mb-5`}>{icon}</div>
        <h2 className="mb-3 mr-6 text-md">{title}</h2>
        <p className="">{description}</p>
      </div>
    </motion.div>
  );
}
