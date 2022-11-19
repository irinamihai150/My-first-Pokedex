import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
function logWhenClicked() {
  return alert("hi");
}
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo handleClick = {logWhenClicked} />
      <BestPokemon abilitiesProp={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
