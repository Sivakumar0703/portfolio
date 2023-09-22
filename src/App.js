
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavigationBar from './components/header/Navbar';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <About />
        <Skill />
        <Project />
        <Contact />
    </div>
  );
}

export default App;
