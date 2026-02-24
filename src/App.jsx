import { useEffect, useState } from 'react'

import './App.css'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import Dashboard from './pages/Dashbaord'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Settings from './pages/Settings'

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile,setIsMobile]=useState(false)
  const [darkMode,setDarkMode]=useState(false)
  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<=768)
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
  },[])
  return (
    <>
      <BrowserRouter>
      <div className={`app ${darkMode?"dark":""}`}>
        
        <Sidebar collapsed={collapsed} 
          isMobile={isMobile}
          setCollapsed={setCollapsed}
        />
        
        <div className={`main ${!isMobile && collapsed ? "collapsed" : ""}`}>
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed } setDarkMode={setDarkMode} darkMode={darkMode}/>
          
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/users' element={<Users/>} />
              <Route path='/settings' element={<Settings/>} />
            </Routes>
          
            
        </div>
        
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
