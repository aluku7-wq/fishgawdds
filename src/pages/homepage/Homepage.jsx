import { useState } from "react";
import game1 from "../../images/game1.jpg";
import game2 from "../../images/game2.jpg";
import game3 from "../../images/game3.jpg";
import game4 from "../../images/game4.jpg";
import { Container } from "./Homepage.styled";

const Homepage = () => {
  const games = [
    { name: "game1", image: game1 },
    { name: "game2", image: game2 },
    { name: "game3", image: game3 },
    { name: "game4", image: game4 },
  ];
  const [herobg, setherobg] = useState(0);
  const [herogame, setherogame] = useState(games[herobg].name);
  return (
    <Container>
      <div className="side">
        <h4>select your game</h4>
        <div className="grid">
          {games.map((game, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{
                  backgroundImage: `url(${game.image})`,
                  backgroundSize: "cover",
                  marginLeft: index == herobg ? "24px" : null,
                  color: index == herobg ? "#ffbc2b" : null,
                }}
                onClick={() => setherobg(index)}
              >
                <div className="card_overlay">
                  <p>{game.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${games[herobg].image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero_overlay">
          <h1>
            Get better <br />
            <span>at {games[herobg].name}</span>
          </h1>
          <h3>
            all payments are made through <span>cash app</span>
          </h3>
          <div className="buttons">
            <button>play</button>
            <button className="purchase">purchase</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
