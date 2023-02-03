import React from "react";
import { CardGrid } from "./components/CardGrid";
import { Links } from "./components/Links";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <CardGrid />
      <Links />
    </div>
  );
}
