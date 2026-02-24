
import collapseIcon from "../assets/menu.svg"
import Switch from "react-switch";
export default function Navbar({collapsed,setCollapsed,setDarkMode,darkMode}){
    return(
        <div className="navbar">
            <button className="toggle-btn" onClick={()=>setCollapsed(prev=>!prev)}>
                <img src={collapseIcon} alt="" />
                
            </button>
            <Switch checked={darkMode} onChange={setDarkMode} offColor="#ccc"
  onColor="#111827"/>
            <h3>Dashboard</h3>
        </div>
    )
}