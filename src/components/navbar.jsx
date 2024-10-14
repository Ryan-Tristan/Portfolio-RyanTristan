import { useContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from '../context/ThemeContext';



const Navbar = () => {
  const {DarkMode, SetDarkMode} = useContext(ThemeContext);
  const toggleDarkMode = () => {
    SetDarkMode(!DarkMode)
    }
  return (
    <nav className="overflow-x-hidden mb-5 flex flex-col sm:flex-row items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center mb-4 sm:mb-0">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl border-b p-1 flex items-center justify-center ${DarkMode ? "text-white border-neutral-300" : "text-slate-800 border-neutral-800"}`}>
          Ryan's Portfolio
        </h2>
      </div>
      <div className={`m-2 sm:m-6 flex items-center justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl text-bold ${DarkMode ? "text-white" : "text-slate-800"}`}>
        <a href="https://www.linkedin.com/in/ryan-tristan-wijaya/"><FaLinkedin/></a>
        <a href="https://github.com/Ryan-Tristan"><FaGithub/> </a>
        <a href="https://www.instagram.com/ryan_triwi/"><FaInstagram/></a>
        <button onClick={toggleDarkMode}><MdDarkMode /></button>
      </div>
    </nav>
  )
}

export default Navbar
