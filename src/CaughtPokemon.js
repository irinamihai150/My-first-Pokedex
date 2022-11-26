import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // const [caught, setcaught] = useState(0);
  const [caught, setcaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    // const pok = ["Charizard", "Evee", "Lucario", "Snorlax"];
    // const randomPokemon = Math.floor(Math.random() * pok.length);
    setcaught(caught.concat(pokemonNameInput));
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Me</button>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
