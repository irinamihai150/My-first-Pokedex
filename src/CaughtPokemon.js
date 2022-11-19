import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // const [caught, setcaught] = useState(0);
  const [caught, setcaught] = useState([]);

  function catchPokemon() {
    const pok = ["Charizard", "Evee", "Lucario", "Snorlax"];
    const randomPokemon = Math.floor(Math.random() * pok.length);
    setcaught(caught.concat(pok[randomPokemon]));
  }
  // function CaughtPokemon(){
  //   setcaught(caught.concat("PiPlup","Ditto"));
  // }
  return (
    <div>
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
