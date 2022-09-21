
import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <Home/>
      <Skills/>
      <Works/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;
