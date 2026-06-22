import { motion } from "framer-motion";
import Icon from "./Svg/Icon.jsx";

export default function ReadyToStart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ready-to-start px-3 py-20 p3-5 bg-primary "
    >
      <div className="container flex flex-col gap-5 items-center text-center justify-center">
        <h2 className="!text-white text-2xl">Ready To Start</h2>
        <p className="!text-babyblue">
          Take the first step towards global career opportunities. Our team is
          ready to help you find the perfect learning path.
        </p>
        <button className="w-xs  btn btn-whatsapp !py-3 w-full flex items-center justify-center gap-3 text-[14px] lg:text-[16px] ">
          <Icon />
          Register via WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
