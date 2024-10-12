
import React, {useState} from "react"
import ThemeContext from "./context/themecontext"
import Dashboard from "./components/Dashboard"



function App() {

  const [DarkMode, SetDarkMode] = useState(false);


  return (
  <ThemeContext.Provider value={{DarkMode, SetDarkMode}}>
    <Dashboard />
  </ThemeContext.Provider>
  )
}

export default App
