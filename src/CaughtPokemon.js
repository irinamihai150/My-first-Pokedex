import React, { useState } from "react";

const CaughtPokemon = ({ dateProp }) => {
  // const [caught, setcaught] = useState(0);
 const [caught, setcaught] = useState(["Charizard","Evee","Lucario", "Snorlax"]);

  function catchPokemon(){
   setcaught(caught + 1);
  }
  // function CaughtPokemon(){
  //   setcaught(caught.concat("PiPlup","Ditto"));
  // }
  return (
    <div>
      <button onClick={catchPokemon}>Catch Me</button>
      <p>
        Caught {caught.length} Pokemon on {dateProp}
      </p>
      {/* <ul>
        {caught.map((i)=> {
          return(
            <li>{i}</li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default CaughtPokemon;
