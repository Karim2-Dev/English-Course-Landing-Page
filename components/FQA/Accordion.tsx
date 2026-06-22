"use client";
import { useState } from "react";
import Arrow from "../Svg/Arrow";
export default function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isActive, setActive] = useState(false);
  return (
    <div
      className={`mb-5 accordion pt-5 px-5 rounded-xl bg-neutral/10 shadow-sm cursor-pointer transition-all ${isActive ? "" : ""}`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="container">
        <div className="question flex  items-center justify-between relative pb-5">
          <h3 className="!text-sm !text-primary">{question}</h3>
          <span
            className={`absolute bottom-0.2 text-primary transition-transform right-0 ${isActive ? "rotate-180" : "rotate-0"}`}
          >
            <Arrow />
          </span>
        </div>
        <div
          className={`content  overflow-hidden  transition-all  ${isActive ? " pb-5" : "w-0 h-0 pb-0"}`}
        >
          <p className={`!text-sm text-start transition-all`}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
