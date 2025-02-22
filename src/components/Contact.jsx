import {CONTACT} from "../constants/index.js";
import { motion } from "motion/react";

const Contact = () => {
  return (
      <div className="border-b border-neutral-800 pb-24">
          <motion.h2
              whileInView={{opacity: 1, y:0}}
              initial={{opacity:0, y:-100}}
              transition={{duration:0.5}}
              className="my-20 text-center text-4xl">
              Contact
          </motion.h2>
         <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity: 0, x:-100}}
             transition={{duration: 0.5}}
             className="text-center tracking-tighter">
             <p className="my-4">
                 {CONTACT.address}
             </p>
             <a href="#" className="border-b">
                 {CONTACT.email}
             </a>
         </motion.div>
      </div>
  );
};

export default Contact;