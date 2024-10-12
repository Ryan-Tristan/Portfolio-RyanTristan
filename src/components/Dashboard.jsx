import Navbar from "./navbar"
import Desc from "./Desc"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import React, {useContext} from "react"
import ThemeContext from "../context/ThemeContext"



const Dashboard = () => {
    const {DarkMode} = useContext(ThemeContext);
  return (
        <div className={`overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900`}>
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className={`absolute inset-0 -z-10 h-full w-full 
            ${DarkMode ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" : "[background:radial-gradient(130%_85%_at_50%_10%,#b0c4de_10%,#fff_100%)]" }`}>
            </div>
          </div>
              <div className="container mx-auto px-8">
              <Navbar />
              <Desc />
              <Skills />
              <Projects />
              <Contact />
            </div>
        </div>

      )
    }

export default Dashboard

