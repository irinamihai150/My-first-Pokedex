import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
function App() {
  function logWhenClicked() {
    console.log("hey");
  }
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon abilitiesProp={abilities} />
      <CaughtPokemon date={date} />
      {/* <PokemonMoves /> */}
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
