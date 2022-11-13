import React from "react";

const BestPokemon = ({ abilitiesProp }) => {
  return (
    <div>
      <p>My favorite pokemon is Pikatchu</p>
      <ul>
        {abilitiesProp.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
