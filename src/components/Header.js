//     // <nav>
//     //     <h1 class="animate__animated animate__bounceInLeft">Hi, I'm Sadie Sial</h1>
//     //     <ul class="navigation">
//     //         <li><a href="#about" class="nav-link">About</a></li>
//     //         <li><a href="#skills" class="nav-link">Skills</a></li>
//     //         <li><a href="#projects" class="nav-link">Work</a></li>
//     //         <li><a href="#contacts" class="nav-link">Contact</a></li>
//     //         <li>
//     //             <a href="https://sadielinks.github.io/professional-portfolio/assets/coding.resume.pdf" class="nav-link"
//     //                 target="_blank">Resume</a>
//     //         </li>
//     //     </ul>

//     //     {/* menu icon */}
//     //     <button class="burger-menu" id="burger-menu">
//     //         <ion-icon class="bars" name="menu-outline"></ion-icon>
//     //     </button>
//     // </nav>

// import React from "react";

// // https://v5.reactrouter.com/web/guides/quick-start
// import { Link } from "react-router-dom";

// // bootstrap - per docs, best to import individual components rather than whole library https://v5.reactrouter.com/web/guides/quick-start
// import { Container } from "react-bootstrap";

// const // Header = () => {
//     return (
//         <header className="navbar navbar-expand-sm">
//             <div className="container">
//                 <Link className="navbar-brand" to="/" id="logo">Hi, I'm Sadie Sial</Link>
//             </div>
//         </header>
//     )
// }

// export default Header;

import React from 'react'

function Header() {
    return (
        <header>
            <div className="container">
                <h2>Hi, my name is Sadie Sial</h2>
            </div>
        </header>
    )
}

export default Header
