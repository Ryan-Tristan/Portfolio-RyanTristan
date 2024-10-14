import React, {useContext} from 'react'
import { PROJECTS } from "../constants/info"
import ThemeContext from '../context/ThemeContext'

const Projects = () => {
    const {DarkMode} = useContext(ThemeContext)
  return (
    <div className={`border-b pb-4 ${DarkMode ? "border-white" : "border-neutral-900"}`}>
        <h2 className={`my-20 text-center text-4xl ${DarkMode ? "text-white" : "text-slate-800"}`}>Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap sm:justify-center md:justify-center lg:justify-center">
                    <div className="sm:w-full md:w-full lg:w-1/4">
                        <img src={project.image} alt="" width={250} height={100} className="rounded mb-6"/>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className={`mb-4 font-bold text-3xl ${DarkMode ? "text-white" : "text-slate-900"}`}>{project.title}</h6>
                        <p className={`mb-4 font-semibold text-1xl ${DarkMode ? "text-white" : "text-slate-900"}`}>{project.description}</p>
                         {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`mr-2 mb-2 inline-block rounded border-2 border-slate-800 px-2 py-1 text-lg font-bold ${
                                            DarkMode
                                                ? "text-white bg-purple-500 hover:bg-purple-200"
                                                : "text-slate-800 bg-blue-100 hover:bg-blue-300"
                                        }`} >
                                        {tech}
                                    </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
