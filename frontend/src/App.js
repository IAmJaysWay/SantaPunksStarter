import "./App.css";
import bgImg from "./xmasBg.jpg";
import pwr from "./powered.png";
import logo from "./punkMas.png";

function App() {
  return (
    <div
      className="App"
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <img src={pwr} alt="pwr" className="pwr" />
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default App;
