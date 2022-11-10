import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

// function BestPokemon() {
//   return (
//     <div>
//       <p>My favorite pokemon is Pikatchu</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Welcome to Pokedex</h1>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
