import React from "react";
import "./Cards.css";
import CardItem from "./Carditem";

function Cards() {
  return (
    <div className="cards">
      <h1>Latest News!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="What metaverse offers and shit like that here"
              label="Metaverse"
              path="/news/metaverse"
            />
            <CardItem
              src="images/img-2.jpg"
              text="What are NFTs and shit it does in web3"
              label="NFTs"
              path="/news/nfts"
            />
            <CardItem
              src="images/img-8.jpg"
              text="To use this bad bitch you gotta sign up bro, get mad lol"
              label="Cryptocurrency Trading Simulator"
              path="/resources/trading-simulator"
            />
            <CardItem
              src="images/img-8.jpg"
              text="To use this bad bitch you gotta sign up bro, get mad lol"
              label="Cryptocurrency Trading Simulator"
              path="/resources/trading-simulator"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Cryptocurrency this and that should be written here"
              label="Cryptocurrency"
              path="/news/cryptocurrency"
            />
            <CardItem
              src="images/img-8.jpg"
              text="To use this bad bitch you gotta sign up bro, get mad lol"
              label="Cryptocurrency Trading Simulator"
              path="/resources/trading-simulator"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Information about web3 so people are interested here"
              label="Web 3.0"
              path="/news/web3.0"
            />
            <CardItem
              src="images/img-8.jpg"
              text="To use this bad bitch you gotta sign up bro, get mad lol"
              label="Cryptocurrency Trading Simulator"
              path="/resources/trading-simulator"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
