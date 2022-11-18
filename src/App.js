import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo appName={"pokedex"} />
      <BestPokemon abilitiesProp={abilities} />
      <CaughtPokemon dateProp={date} />
    </div>
  );
}

export default App;
