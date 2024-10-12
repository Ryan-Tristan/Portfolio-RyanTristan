import React, {useContext} from 'react'
import { IoIosClose } from "react-icons/io";
import ThemeContext from '../context/themecontext';

const ReactButton = ({openReact, onClose, children}) => {
    const {DarkMode} = useContext(ThemeContext);
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors 
    ${openReact ? "visible bg-black/20" : "invisible"}`}>
        
    <div onClick={(e) => e.stopPropagation()} className={`rounded-xl shadow p-6 transition-all ${openReact ? "scale-100 opacity-100" : "scale-125 opacity-0"} ${DarkMode ? "bg-slate-800" : "bg-neutral-100"}`}>
        <button onClick={onClose} className={`absolute top-2 right-2 p-1 rounded-lg ${DarkMode ? "bg-text-slate-800 text-purple-300" : "bg-white text-gray-400"}`}>
            <IoIosClose className="text-2xl"/>
        </button>
        {children}
    </div>
    </div>
  )
}

export default ReactButton