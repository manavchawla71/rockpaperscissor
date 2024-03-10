import React, { useState } from "react";
import "./Shapes.css";
import rock from "./../assets/rock.png";
import paper from "./../assets/paper.png";
import scissors from "./../assets/scissors.png";

const Shapes = ({
  userscore,
  compscore,
  setuserscore,
  setcompscore,
  color,
  setcolor,
}) => {
  const [shape, setShape] = useState("");
  const [result, setResult] = useState("");

  const handlecompshape = () => {
    const options = ["rock", "paper", "scissors"]; // Corrected "Scissors" to "scissors"
    const randindex = Math.floor(Math.random() * options.length); // Added () to Math.random()
    return options[randindex];
  };

  const determineWinner = (playerShape, compShape) => {
    if (playerShape === compShape) {
      setcolor("draw");
      //   console.log("it is a draw");
    } else if (
      (playerShape === "rock" && compShape === "scissors") ||
      (playerShape === "paper" && compShape === "rock") ||
      (playerShape === "scissors" && compShape === "paper")
    ) {
      //   console.log("you win");
      setuserscore(userscore + 1);
      setcolor("hey you won");
    } else {
      setcolor("you lose");
      //   console.log("you lose");
      setcompscore(compscore + 1);
    }
  };

  const handleShapeClick = (playerShape) => {
    const compShape = handlecompshape();
    const result = determineWinner(playerShape, compShape);
  };

  return (
    <div className="shapes">
      <img src={rock} alt="rock" onClick={() => handleShapeClick("rock")} />
      <img src={paper} alt="paper" onClick={() => handleShapeClick("paper")} />
      <img
        src={scissors}
        alt="scissors"
        onClick={() => handleShapeClick("scissors")}
      />
    </div>
  );
};

export default Shapes;
