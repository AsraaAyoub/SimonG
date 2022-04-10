import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import ColorCard from "./components/ColorCard";
import React from "react";
import setPlay from "./components/ColorCard";
import initPlay from "./components/ColorCard";
import play from "./components/ColorCard";
function App() {
  const [isOn, setIsOn] = useState(initialState);
  const colorList = ["green", "red", "yellow", "blue"];
  const initialState = {
    isDisabled: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };
  function startHandle() {
    setIsOn(true);
  }
  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisabled: true });
    } else {
      setPlay({ ...initPlay, isDisabled: false });
    }
  }, [isOn]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          {colorList &&
            colorList.map((v, img) => <ColorCard color="green"></ColorCard>)}

          <ColorCard color="green"></ColorCard>
          <ColorCard color="red"></ColorCard>
          <ColorCard color="blue"></ColorCard>
          <ColorCard color="yellow"></ColorCard>
        </div>
        {!isOn && !play.score && (
          <button onClick={startHandle} className="startButton">
            Click Me
          </button>
        )}
        {!isOn && (play.isDisplay || play.userPlay) && (
          <div classNmae="score">{play.score} </div>
        )}
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
