import { useState, useEffect } from "react";
import './App.css';
import SideBar from './components/SideBar';
import About from './components/About';
import Experience from './components/Experience';
import Reels from './components/Reels';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  // Read the saved preference once, on first render.
  const [navOpen, setNavOpen] = useState(() => {
    try {
      return localStorage.getItem("nav-open") !== "0";
    } catch {
      return true;
    }
  });

  // Save it again whenever it changes.
  useEffect(() => {
    try {
      localStorage.setItem("nav-open", navOpen ? "1" : "0");
    } catch {}
  }, [navOpen]);

  return (
    <div className={navOpen ? "shell" : "shell nav-closed"}>
      <SideBar navOpen={navOpen} onToggle={() => setNavOpen(!navOpen)} />
      <main>
        <About />
        <Experience />
        <Reels />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
