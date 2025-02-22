import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { motion } from "motion/react";
import { RiOpenaiFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";

const iconVariants = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{opacity: 1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                Tech
            </motion.h2>
            <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title="Python"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title="OpenAI/LLM"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiOpenaiFill className="text-7xl text-white-500"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title="ReactJS"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title="Flask"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFlask className="text-7xl text-white-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title="MongoDB"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    title="PostgreSQL"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    title="SQL"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <PiFileSql className="text-7xl text-sky-700"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    title="NodeJS"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
            </motion.div>
        </div>

    );
};

export default Technologies;