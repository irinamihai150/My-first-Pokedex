import React from "react";

const Title = (props) => <h1>{props.appName}</h1>;

const Logo = () => {
  const appName = "Irina's Pokedex";

  return (
    <div>
      <header className="App-header">
        <Title appName={appName} />
        {/* <h1>Welcome to Pokedex</h1> */}
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
};
export default Logo;
