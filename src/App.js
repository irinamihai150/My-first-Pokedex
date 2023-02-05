import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import PokemonInfo from "./PokemonInfo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  function logWhenClicked() {
    console.log("hey");
  }
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <BrowserRouter>
      <div>
        <Logo handleClick={logWhenClicked} />
        {/* <BestPokemon abilitiesProp={abilities} /> */}
        <Link to="/best-pokemon">Best Pokemon</Link>
        {/* <CaughtPokemon date={date} /> */}
        <Link to="/caught-pokemon">Caught Pokemon</Link>
        <Link to ="/pokemon-info" >Pokemon Info</Link>
        <PokemonMoves />
        <PokemonMovesSelector />
        <PokemonCity />
        <Routes>
          <Route
            path="best-pokemon"
            element={<BestPokemon abilitiesProp={abilities} />}
          />
          <Route
            path="caught-pokemon"
            element={<CaughtPokemon date={date} />}  />
          <Route path="/pokemon/:name" element={<PokemonInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
