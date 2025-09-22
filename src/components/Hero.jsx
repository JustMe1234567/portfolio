import { motion } from "framer-motion";
import profilePic from "../assets/klowiProfile.jpg";
import { HERO_CONTENT } from "../constants";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChild: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Profile Picture"
              className="border border-stone-900 rounded-3xl  bg-black"
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              variants={childVariants}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={650}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tight lg:text-8xl text-blue-400"
            >
              John Chloe
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-blue-300 to-blue-600 tracking-tight  text-transparent bg-clip-text text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 text-blue-200  text-justify indent-10 max-w-
              lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={""}
              className="bg-blue-300 rounded-full p-3 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div> 
      </div>
    </div>
  );
};

export default Hero;
