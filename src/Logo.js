import React from "react";

// const Title = (props) => <h1>{props.appName}</h1>;

const Logo = (props) => {
  const appName = "Irina's Pokedex";
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to {appName}</h1>
        <div onClick={props.handleClick}>
          {" "}
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
            className="App-logo"
            alt="logo"
          />
        </div>
      </header>
    </div>
  );
};
export default Logo;
