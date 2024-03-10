import React, { useState, useEffect } from "react";
import Result from "./components/Result";
import Shapes from "./components/Shapes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [userscore, setUserscore] = useState(0);
  const [compscore, setCompscore] = useState(0);
  const [color, setColor] = useState("Game Started");
  const [seconds, setSeconds] = useState(1 * 60); // 1 minute in seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <>
      <h1>Rock Paper Scissors</h1>
      <p>
        {minutes}:{remainingSeconds < 10 ? "0" : ""}
        {remainingSeconds}
      </p>
      <Shapes
        userscore={userscore}
        compscore={compscore}
        setuserscore={setUserscore}
        setcompscore={setCompscore}
        color={color}
        setcolor={setColor}
      />
      <div className="scores">
        <div className="score">
          <p>{userscore}</p>
          <p>Your</p>
        </div>
        <div className="comp_score">
          <p>{compscore}</p>
          <p>Comp</p>
        </div>
      </div>
      <Result>{color}</Result>
    </>
  );
}

export default App;
