import { motion } from "framer-motion";
export default function DescriptionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      layout
      id=""
      className="flex flex-col gap-3 items-center h-60 w-full justify-center py-20 px-3 cursor-default md:px-20 text-center overflow-hidden "
    >
      <h2>Practical English for the Real World</h2>
      <p>
        We don&apos;t just teach grammar; we teach you how to communicate with
        confidence in job interviews, university seminars, and global business
        meetings. It&apos;s time to translate your ambition into fluency.
      </p>
    </motion.div>
  );
}
