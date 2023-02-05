import React from "react";

// class BestPokemon extends Component() {
//   state = {
//   pokemonNames : [],
//  }
//  componentDidMount() {
//    fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
// .then(res => res.json()))
// .then((data)=> {console.log(data.pokemon_entries[0].pokemon_species.name)})
//  }
//   render() {
//     return (
//       <div>
//         <p>My favorite pokemon is Pikatchu</p>
//         <ul>
//           {this.abilitiesProp.map((name, index) => (
//             <li key={index}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

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
