import { useState } from 'react'
import React from "react";

// https://v5.reactrouter.com/web/guides/quick-start
import { Route, Redirect, HashRouter } from "react-router-dom";
import bootstrap from "react-bootstrap";

// components main
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Navigation';

// component sub-sections
// import About from './components/about'
// import Skills from './components/skills'
// import Portfolio from './components/portfolio'
// import Contact from './components/contact'



{/* <>
<Header />
<div>

</div>
<Route exact path="/" component={About} />
<Route exact path="/skills" component={Skills} />
<Route exact path="/portfolio" component={Portfolio} />
<Route exact path="/contact" component={Contact} />
<Footer />
</> */}

function App() {
  return (
    <>
      <Header />
      <div className='container'>
      </div>
      <Nav />
      <Footer />
    </>
  );
}

export default App;