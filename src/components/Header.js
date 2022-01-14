import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../../components/Navigation';
// import About from '../../components/About';
// import Skills from '../../components/Skills';
// import Portfolio from '../../components/Portfolio';
// import Contact from '../../components/Contact';
// import Resume from '../../components/Resume';

// Tip from tutor:
import { AnimateSharedLayout } from "framer-motion"

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <motion.div id="header" drag
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    dragElastic={0.7}>
                    <h2>
                        <a href='sadielinks.github.io/react-portfolio-20/'>
                            <span role="img">
                                <motion.img src='https://img.icons8.com/material-rounded/48/000000/sparkling.png' alt="hi" class="icon" id="r-icon"
                                    variants={svgVariants}
                                    initial="hidden"
                                    animate="visible" />
                            </span>
                            Hi, I'm Sadie Sial
                        </a>
                    </h2>

                    <Navigation />
                </motion.div>


                <div className="content">
                    <Route exact path="/" render={() => (<Redirect to="/about" />)} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        )
    }
}

// function Header({ text, bgColor, textColor }) {
//     const headerStyles = {
//         backgroundColor: bgColor,
//         color: textColor,
//         textAlign: 'center'
//     }

//     return (
//         <header style={headerStyles}>
//             <div className="container">
//                 <h2>{text}</h2>
//             </div>
//         </header>
//     )
// }

// Header.defaultProps = {
//     text: "Hi, I'm Sadie Sial",
//     bgColor: 'rgb(238, 233, 245)',
//     textColor: '#795eb0'

// }

export default Header