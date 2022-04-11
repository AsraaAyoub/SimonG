import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect, useInsertionEffect } from "react";
import ColorCard from "./components/ColorCard";
import React from "react";
import setPlay from "./components/ColorCard";
import initPlay from "./components/ColorCard";
import play from "./components/ColorCard";
import timeout from "./utils/util";
function App() {
  const [isOn, setIsOn] = useState(false);
  const colorList = ["green", "red", "yellow", "blue"];
  const initialPlay = {
    isDisabled: false,
    colors: [],
    score: 0,
    userstate: false,
    userColors: [],
  };
  const [play, setPlay] = useState(initialPlay);
  const [flashColor, setflashColor] = useState("");
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
  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.random() * 4];
      const copyColors = [...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
  }, [isOn, play, isDisplay]);
}
useInsertionEffect(() => {
  if (ison && play.isDisplay && play.colors.lenght) {
    // setPlay({ ...play, isDisplay: false });
    displayColors();
  }
}, [isOn, play.isDisplay, play.colors.lenght]);
async function displayColors() {
  console.log("called display colors", play.colors);
  await timeout(1000);
  for (let i = 0; i < play.colors.length; i++) {
    setflashColor(play.colors[i]);
    await timeout(1000);
    setflashColor("");
    await timeout(1000);
    if (i === play.colors.length - 1) {
      const copyColors = [...play.colors];
      setPlay({
        ...play,
        isDisplay: false,
        userPlay: true,
        userColors: copyColors.reverse(),
      });
    }
  }
  async function cardClickHandle(color) {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop(); //remove the last color
      setFlashColor(color);

      if (color == lastColor) {
        if (copyUserColors.lenght) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(1000);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.lenght,
            userColors: [],
          });
        }
      } else {
        await timeout(1000);
        setPlay({ ...initPlay, score: play.colors.lenght });
      }
      await timeout(1000);
      setFlashColor("");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          {colorList &&
            colorList.map((v, i) => (
              <ColorCard
                onClick={() => {
                  cardClickHandle;
                }}
                flash={(flashColor = v)}
                color={v}
              ></ColorCard>
            ))}

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
        {isOn && (play.isDisplay || play.userPlay) && (
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
