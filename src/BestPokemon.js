import React from 'react'

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite pokemon is Pikatchu</p>
      <ul>
        {abilities.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon
