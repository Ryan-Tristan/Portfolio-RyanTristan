import React, {useContext, useState} from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRstudioide } from "react-icons/si";
import ThemeContext from '../context/ThemeContext';

// Overlays

import ReactButton from '../Modals/ReactButton'
import NodeButton from '../Modals/NodeButton';
import LaravelButton from '../Modals/LaravelButton';
import PythonButton from '../Modals/PythonButton';
import RButton from '../Modals/RButton';



const Skills = () => {
    const {DarkMode} = useContext(ThemeContext);

    const [openReact, SetOpenReact] = useState(false);
    const [openNode, SetOpenNode] = useState(false);
    const [openLaravel, SetOpenLaravel] = useState(false);
    const [openPython, SetOpenPython] = useState(false);
    const [openR, SetOpenR] = useState(false);

  return (
    <div className={`border-b pb-24 ${DarkMode ? "border-white" : "border-neutral-800"}`}>
        <h2 className={`my-20 text-center text-4xl ${DarkMode ? "text-white" : "text-slate-800"}`}>My Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-7">
            <div className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenReact(true)}><FaReact className="text-7xl text-cyan-400"/></button>
            </div>

             
            <ReactButton openReact = {openReact} onClose={() => SetOpenReact(false)}>
                <div className="text-center w-56">
                    <div className="container flex items-center">
                    <FaReact size={48} className="left-2 text-cyan-400"/>
                    <h3 className={`text-1xl p-2 font-bold ${DarkMode ? "text-white" : "text-black"}`}>
                        ReactJS
                    </h3>
                    </div>
                    <div className="mx-auto my-4 w-48">

                        <p className={`text-sm ${DarkMode ? "text-white" : "text-black"}`}>
                            I have used ReactJS to create this website portfolio, a stock dashboard, and many more projects to come. 
                        </p>
                    </div> 
                </div>
            </ReactButton>

            <div className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenNode(true)}><FaNode className="text-7xl text-lime-400"/></button>
            </div>

            <NodeButton openNode = {openNode} onClose={() => SetOpenNode(false)}>
                <div className="text-center w-56">
                    <div className="container flex items-center">
                    <FaNode size={48} className="left-2 text-lime-400"/>
                    <h3 className={`text-1xl p-2 font-bold ${DarkMode ? "text-white" : "text-black"}`}>
                        NodeJS
                    </h3>
                    </div>
                    <div className="mx-auto my-4 w-48">

                        <p className={`text-sm ${DarkMode ? "text-white" : "text-black"}`}>
                            I have used NodeJS to create a discord bot that sets timer for specific raids in game (WIP).
                        </p>
                    </div> 
                </div>
            </NodeButton>

            <div className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenLaravel(true)} ><FaLaravel className="text-7xl text-red-700"/></button>
            </div>

            <LaravelButton openLaravel = {openLaravel} onClose={() => SetOpenLaravel(false)}>
                <div className="text-center w-56">
                    <div className="container flex items-center">
                    <FaLaravel size={48} className="left-2 text-red-700"/>
                    <h3 className={`text-1xl p-2 font-bold ${DarkMode ? "text-white" : "text-black"}`}>
                        Laravel
                    </h3>
                    </div>
                    <div className="mx-auto my-4 w-48">

                        <p className={`text-sm ${DarkMode ? "text-white" : "text-black"}`}>
                            I have used Laravel to create my Entrepreneur Group Project which is a website that handles commissions for artists and managing their portfolio (WIP).
                        </p>
                    </div> 
                </div>
            </LaravelButton>




            <div className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenPython(true)}>
                <FaPython className="text-7xl"/>
                </button>
            </div>

            <PythonButton openPython = {openPython} onClose={() => SetOpenPython(false)}>
                <div className="text-center w-56">
                    <div className="container flex items-center">
                    <FaPython size={48} className="left-2"/>
                    <h3 className={`text-1xl p-2 font-bold ${DarkMode ? "text-white" : "text-black"}`}>
                        Python
                    </h3>
                    </div>
                    <div className="mx-auto my-4 w-48">

                        <p className={`text-sm ${DarkMode ? "text-white" : "text-black"}`}>
                            I have used Python to create an AutoSorter Program on a mac and have used python for data analysis with machine learning for prediction using clustering and classification.
                        </p>
                    </div> 
                </div>
            </PythonButton>


            <div className={`rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-800 ${DarkMode ? "bg-neutral-800 border-neutral-800" : "bg-neutral-800 border-neutral-800"}`}>
                <button onClick={() => SetOpenR(true)}>
                <SiRstudioide className="text-7xl fill-blue-200"/>
                </button>
            </div>
            
            <RButton openR = {openR} onClose={() => SetOpenR(false)}>
                <div className="text-center w-56">
                    <div className="container flex">
                    <SiRstudioide size={48} className="left-2 fill-blue-200"/>
                    <h3 className={`text-1xl p-2 font-bold ${DarkMode ? "text-white" : "text-black"}`}>
                        R Programming Language
                    </h3>
                    </div>
                    <div className="mx-auto my-4 w-48">

                        <p className={`text-sm ${DarkMode ? "text-white" : "text-black"}`}>
                            I have used R in my university for Data mining to figure out the frequent datasets of multiple objects.
                        </p>
                    </div> 
                </div>
            </RButton>

        </div>
    </div>
  )
}

export default Skills
