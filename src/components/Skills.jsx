import React, {useContext, useState} from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRstudioide } from "react-icons/si";
import ThemeContext from '../context/ThemeContext';
import { motion } from "framer-motion";

// Overlays


const Skills = () => {
    const {DarkMode} = useContext(ThemeContext);


    const iconVariants = (duration) => ({
        initial: { y:-10 },
        animate:{
            y:[10 , -10],
            transition: {
                duration:duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    });

  return (
    <div className={`border-b pb-24 ${DarkMode ? "border-white" : "border-neutral-800"}`}>
        <h2 className={`my-20 text-center text-4xl ${DarkMode ? "text-white" : "text-slate-800"}`}>My Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-7">

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenReact(true)}><FaReact className="text-7xl text-cyan-400"/></button>
            </motion.div>

             

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenNode(true)}><FaNode className="text-7xl text-lime-400"/></button>
            </motion.div>



            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" 
                className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenLaravel(true)} ><FaLaravel className="text-7xl text-red-700"/></button>
            </motion.div>





            <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenPython(true)}>
                <FaPython className="text-7xl left-2 text-blue-500 bg-yellow-300 rounded-full p-1"/>
                </button>
            </motion.div>




            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenR(true)}>
                <SiRstudioide className="text-7xl fill-blue-200"/>
                </button>
            </motion.div>
            


        </div>
    </div>
  )
}

export default Skills
