import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";

const MobileNavMenu = () => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li >
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">Know Us</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">About Us</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Vision</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Team</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/`}><span className="menu-text">Our Partners</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon far fa-angle-down"></i></span>
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

export default MobileNavMenu;
