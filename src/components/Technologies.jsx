import { motion } from "framer-motion";
import { BsWordpress } from "react-icons/bs";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNodejsFill,
  RiReactjsLine,
} from "react-icons/ri";
import { SiJavascript, SiLaravel, SiMongodb, SiPhp } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-10, 10], // Starts at 0, moves to -10, then to 10
    transition: {
      duration: duration,
      ease: "easeInOut", // Smoother easing curve
      repeat: Infinity,
      repeatType: "mirror", // Alternates back and forth
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-blue-200 text-center text-4xl"
      >
        Technologies
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-2"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <RiNodejsFill className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <RiCss3Fill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiHtml5Fill className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiLaravel className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiPhp className="text-7xl text-[#7277ad]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400 rounded-md" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <BsWordpress className="text-7xl font-bold rounded-full bg-gray-500 p-4" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
