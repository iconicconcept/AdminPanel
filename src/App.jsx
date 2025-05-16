import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { useState } from "react"

function App() {

  const [toggle, setToggle] = useState(false)

  const openSider = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className="grid-container">
      <Header openSideBar={openSider}/>
      <Sidebar openToggle={toggle} openSideBar={openSider}/>
      <Home />
    </div>
  )
}

export default App
