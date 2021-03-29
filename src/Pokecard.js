import React, { Component } from "react";
import "./Pokecard.css";

const Poke_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const imgSrc = `${Poke_api}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="Pokecard-data ">Type: {this.props.type}</div>
        <div className="Pokecard-data ">Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
