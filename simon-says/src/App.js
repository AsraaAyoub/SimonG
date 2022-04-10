import logo from "./logo.svg";
import "./App.scss";
import ColorCard from "./components/ColorCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          <ColorCard color="green"></ColorCard>
          <ColorCard color="red"></ColorCard>
          <ColorCard color="blue"></ColorCard>
          <ColorCard color="yellow"></ColorCard>
        </div>
        <button className="startButton">Click Me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
