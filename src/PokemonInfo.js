import React, { useParams } from "react";

export default function PokemonInfo() {
  let { name } = useParams();
  return <h2>Pokemon: {name}</h2>;
}
