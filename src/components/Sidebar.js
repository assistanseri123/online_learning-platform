import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar"style={{borderRadius:"2px 30px 50px 20px"}}>
            <h2 className='style={{color:"blue"}}'>Menu</h2>
            <ul className="sidebar-menu"style={{color:"blue"}}>
                <li>
                    <Link to="/dashboard" className="sidebar-link"style={{color:"blue"}}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/schedule" className="sidebar-link"style={{color:"blue"}}>Schedule</Link>
                </li>
                <li>
                    <Link to="/homework" className="sidebar-link"style={{color:"blue"}}>Homework</Link>
                </li>
                <li>
                    <Link to="/lecture" className="sidebar-link"style={{color:"blue"}}>Lecture</Link>
                </li>
                <li>
                    <Link to="/progress" className="sidebar-link"style={{color:"blue"}}>Progress</Link>
                </li>
                <li>
                    <Link to="/messages" className="sidebar-link"style={{color:"blue"}}>Messages</Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-link"style={{color:"blue"}}>Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
