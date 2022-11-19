import React from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite pokemon is Pikatchu</p>
      <ul>
        {props.abilitiesProp.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
