import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
