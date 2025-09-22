import { motion } from "framer-motion";
import { CONTACT } from "../constants";
const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 1, x: -100 }}
      transition={{ duration: 0.5 }}
      className="border-t border-stone-900 pb-20 "
    >
      <h2 className="my-10 text-center text-4xl">Get in touch</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="my-4 border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
