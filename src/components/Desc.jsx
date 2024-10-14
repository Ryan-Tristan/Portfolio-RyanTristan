import React, {useContext} from 'react'
import ProfilePic from '../assets/Ryan.jpg'
import ThemeContext from '../context/ThemeContext';
import { motion } from "framer-motion"

const Desc = () => {
    const {DarkMode} = useContext(ThemeContext);
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 initial={{x:-100, opacity:0}} 
                    animate={{x:0, opacity:1}} 
                    transition={{duration: 0.5 }} 
                    className={` pb-16 text-5xl font-bold tracking-tight lg:mt-12 lg:text-7xl text-transparent ${DarkMode ? "bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text " : "bg-clip-text bg-gradient-to-r from-slate-700 via-black to-slate-700"}`}>Ryan Tristan Wijaya</motion.h1>
                    <motion.span 
                    initial={{x:-100, opacity:0}} 
                    animate={{x:0, opacity:1}} 
                    transition={{duration: 0.5, delay: 0.5 }} 
                    className={`font-bold text-4xl tracking-tight text-transparent ${DarkMode ? "bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text": "bg-gradient-to-r from-slate-600 via-black to-slate-600 bg-clip-text"}`}>Computer Science Major</motion.span>
                    <br/>
                    <motion.p
                    initial={{x:-100, opacity:0}} 
                    animate={{x:0, opacity:1}} 
                    transition={{duration: 0.5, delay: 1 }} 
                     className={`max-w-xl py-6 font-semibold tracking-tighter text-xl ${DarkMode ? "text-white" : "text-slate-700 "}`}>
                        I am a Computer Science student specializing in Database courses, with a strong passion for hands-on programming and development. 
                        I consistently strive for efficiency in my work and am committed to continuous learning to further enhance my skills.
                    </motion.p>
                    <br/>
                    <motion.p
                    initial={{x:-100, opacity:0}} 
                    animate={{x:0, opacity:1}} 
                    transition={{duration: 0.5, delay: 1.25 }} 
                     className={`text-slate-700 max-w-xl py-6 font-semibold tracking-tighter text-xl ${DarkMode ? "text-white" : "text-slate-800"}`}>This is a portfolio that shows my computer science journey!</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                     initial={{x:100, opacity:0}} 
                    animate={{x:0, opacity:1}} 
                    transition={{duration: 0.5, delay: 1.25 }} 
                     className="rounded-full w-100 shadow-2xl" src={ProfilePic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Desc
