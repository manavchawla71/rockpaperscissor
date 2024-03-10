import React from "react";
import "./result.css";
const Result = ({ children }) => {
  return (
    <div>
      <h1 className="result">{children}</h1>
    </div>
  );
};

export default Result;
