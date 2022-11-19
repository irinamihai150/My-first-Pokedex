import React from "react";

// const Title = (props) => <h1>{props.appName}</h1>;

const Logo = (props) => {
  const appName = "Irina's Pokedex";
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          className="App-logo"
          alt="logo"
          onClick={props.handleClick}
        />
      </header>
    </div>
  );
};
export default Logo;
