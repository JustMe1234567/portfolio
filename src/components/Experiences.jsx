import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
const Experiences = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-blue-200"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-xl text-stone-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-stone-500 text-sm">
                  {experience.company}
                </span>
              </h3>
              <p
                className="mb-4 text-stone-400 text-justify indent-8
              "
              >
                {experience.description}
              </p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 mb-12 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
