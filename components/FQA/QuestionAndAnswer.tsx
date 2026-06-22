import { motion } from "framer-motion";
import Accordion from "./Accordion";
type tFQA = {
  question: string;
  answer: string;
};
const FQAData: tFQA[] = [
  {
    question: "How do I register via WhatsApp?",
    answer:
      'Simply click any "Register Now" button on this page. It will open a WhatsApp chat with our admissions team who will guide you through enrollment.',
  },
  {
    question: "What is the schedule like?",
    answer:
      "Our courses are highly flexible, offering both live sessions and recorded materials to fit around your professional or academic life.",
  },
];
export default function QuestionAndAnswer() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      className="py-10 px-3 text-2xl text-center"
    >
      <h1 className="mb-10">Frequently Asked Questions</h1>
      {FQAData.map((e, i) => (
        <Accordion key={i} question={e.question} answer={e.answer} />
      ))}
    </motion.div>
  );
}
