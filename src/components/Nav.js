import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation" id="navigation">
            <h5>
                <NavLink activeStyle={{ color: '#72a78a' }} to="/about">About</NavLink>
                <NavLink activeStyle={{ color: '#72a78a' }} to="/skills">Skills</NavLink>
                <NavLink activeStyle={{ color: '#72a78a' }} to="/portfolio">Portfolio</NavLink>
                <NavLink activeStyle={{ color: '#72a78a' }} to="/contact">Contact </NavLink>
                <NavLink activeStyle={{ color: '#72a78a' }} to="/resume">Resume</NavLink>
            </h5>
        </div>
    );
}

export default Navigation;