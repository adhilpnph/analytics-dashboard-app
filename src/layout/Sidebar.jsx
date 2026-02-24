import { Link, Navigate, NavLink } from "react-router-dom";
import report from "../assets/data-report.svg"
import revenue from "../assets/holding-hand-revenue.svg"
import overview from "../assets/overview.svg"
import users from "../assets/users-alt.svg"
import settings from "../assets/settings.svg"
export default function Sidebar({collapsed,isMobile}){
    return(
        <div className={`sidebar ${collapsed? "collapsed":""}
        ${isMobile? "mobile":""}
        ${isMobile && !collapsed?  "open":""}
        `}
        >

            <h2 className="logo">{collapsed? "A":"Analytics"}</h2>
                <ul type="none" className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    
                                <span className="icon"><img src={overview} alt="overview-icon" /></span>
                                {!collapsed && <span>Overview</span>}
                      
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/revenue" className={({ isActive }) => isActive ? "active" : ""}>
                            
                                
                                <span className="icon"><img src={revenue} alt="revenue-icon" /></span>
                                {!collapsed && <span>Revenue</span>}
                                
                            
                        </NavLink>
                    </li>
                   
                    
                        
                    <li>
                        <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
                         
                                <span className="icon"><img src={users} alt="users-icon" /></span>
                                {!collapsed && <span>Users</span>}
                        </NavLink>
                    </li>
                    
                    
                    <li >

                        <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="icon"><img src={report} alt="report-icon" /></span>
                            {!collapsed && <span>Reports</span>}
                        </NavLink>

                    </li>
                       
                    

                    
                      
                    <li >
                        
                        <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
                            <span className="icon"><img src={settings} alt="settings-icon" /></span>
                            {!collapsed && <span>Settings</span>}
                        </NavLink>
                    
                    </li>
                      
                    
                    
                </ul>
        </div>
    )
}