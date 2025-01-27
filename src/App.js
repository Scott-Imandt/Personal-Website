import React from 'react'
//import Navbar from './components/navbar/Navbar.js';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import IndividualProject from './components/pages/IndividualProject.js';
import TechnicalProjects from './components/pages/TechnicalProjects.js';
import { AnimatePresence } from 'framer-motion';
import './App.css'

import ReactGA from "react-ga4";

ReactGA.initialize("G-FGR2MFQC25");

function App() {

  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path='/' exact Component={Home} />
          <Route path='/Personal-Website' exact Component={Home} />
          <Route path='/Projects' excat Component={Projects} />
          <Route path='/AboutMe' excat Component={AboutMe} />
          <Route path='/Skills' excat Component={Skills} />
          <Route path='/IndividualProject' excat Component={IndividualProject} />
          <Route path='/TechnicalProjects' excat Component={TechnicalProjects} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
