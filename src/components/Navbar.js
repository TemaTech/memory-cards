import React from "react";

export function Navbar() {
  return (
    <div className="navbar">
      <h1>Memory Cards</h1>
      <div className="score-container">
        <div><p>Best Score: 0</p></div>
        <div><p>Current Score: 0</p></div>
      </div>
    </div>
  );
}
