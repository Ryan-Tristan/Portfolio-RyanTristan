import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
const Contact = () => {
  const {DarkMode} = useContext(ThemeContext)
  return (
    <div className={` pb-20 ${DarkMode ? " text-white" : " text-slate-800"}`}>
        <h2 className="my-10 text-center text-4xl ">
            Contact Me
        </h2>
        <div className="text-center tracking-tighter">
            <p className="my-4 text-lg font-semibold">+62 858 9285 3880</p>
            <p className="my-4 text-lg font-semibold">ryan.wijaya001@binus.ac.id</p>
            <p className="font-semibold text-lg">ryantristanwijaya@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact
