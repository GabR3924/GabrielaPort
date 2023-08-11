import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";
import css from './app.module.css'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className={css.app}>
            <Hero/>
           <Works/>
           <Contact className={css.contact}/>
       <Routes>
            <Route path="https://github.com/GabR3924"/>
       </Routes>

    </div>

  );
}

export default App;