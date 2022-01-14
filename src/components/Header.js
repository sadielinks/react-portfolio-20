import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../../components/Navigation';
// import About from '../../components/About';
// import Skills from '../../components/Skills';
// import Portfolio from '../../components/Portfolio';
// import Contact from '../../components/Contact';
// import Resume from '../../components/Resume';

// Tip from tutor:
import { motion } from "framer-motion"

const svgs = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: { duration: 3 }
    },
}

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center'
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Hi, I'm Sadie Sial",
    bgColor: 'rgb(238, 233, 245)',
    textColor: '#795eb0'

}

export default Header