import './App.css';
import Home from './Screens/Home';
import Services from './Screens/Services';
import HowWeWork from './Screens/HowWeWork';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import NavBar from './Components/Navbar'; 

function App() {
  return ( 
    <div className="App">
      <NavBar />
      <div id="Home"><Home /></div>
      <div id="Services"><Services /></div>
      <div id="HowWeWork"><HowWeWork /></div>
      <div id="Benefits"><Benefits /></div>
      <div id="Contact"><Contact /></div>
    </div>
  );
}

export default App;
