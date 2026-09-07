import './App.css';
import SideBar from './components/SideBar.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Resume from './components/Resume.js'
import Contact from './components/Contact.js'
function App() {
  return (
    <div>
      <SideBar></SideBar>
      <main>
        <About></About>
        <Experience></Experience>
        <Reel></Reel>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
