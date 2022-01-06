import { useState } from 'react'
import React from "react";
// https://v5.reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Header from './components/Header';
import Footer from './components/Footer';

// sections
import About from './sections/about'
import Skills from './sections/skills'
import Portfolio from './sections/portfolio'
import Contact from './sections/contact'



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
    </>
  );
}

export default App;