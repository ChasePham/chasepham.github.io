import './App.css';
import SideBar from './components/SideBar';
import About from './components/About';
import Experience from './components/Experience';
import Reels from './components/Reels';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="shell">
      <SideBar />
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
