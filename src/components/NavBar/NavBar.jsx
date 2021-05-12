import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li >
                    <NavLink to={process.env.PUBLIC_URL}><span className="menu-text">Home</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">Know Us</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">About Us</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Vision</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Team</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Partners</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Placement and Training</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Import and Export</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Ecommerce</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Digital Marketing and  <br/> Website Development</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Cybersecurity</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Data Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Blockchain</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Event Management/ <br/>  Manpower</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Connect</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
