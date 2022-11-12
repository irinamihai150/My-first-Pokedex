import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

// const Title = () => {
//   return <h1> Welcome to pokedex</h1>;
// };

function App() {
  return (
    <div className="App">
      {/* <Title>Welcome to Pokedex</Title> */}
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
