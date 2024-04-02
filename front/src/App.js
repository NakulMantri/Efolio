import './App.css';

import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Coursework from './components/Coursework';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Home />
      <Heading heading = {"ABOUT ME!"} />
      <About />
      <Heading heading = {"SKILLS"} />
      <Skill />
      <Heading heading = {"COURSES"} />
      <Coursework />
      <Heading heading = {"PROJECTS"} />
      <Slider />
      <Heading heading = {"CONTACT ME!"} />
      <Footer />
    </div>
  );
}

export default App;
