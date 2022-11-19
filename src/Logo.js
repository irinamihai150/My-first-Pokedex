import React from "react";

// const Title = (props) => <h1>{props.appName}</h1>;

const Logo = (props) => {
  const appName = "Irina's Pokedex";
  return (
    <div>
      <header className="App-header">
        <h1 onClick={props.handleClick}>Welcome to {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
};
export default Logo;
