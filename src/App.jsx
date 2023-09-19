import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Utils/Themes';
import css from './App.module.css'; 
import Navbar from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className={css.body}>
      <Navbar/>
        <Hero/>
        <div className={css.wrapper}>
          <Skills/> 
          <Projects/>
        </div>
        {/* <Education/> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
