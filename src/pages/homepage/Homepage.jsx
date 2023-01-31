import { useState } from "react";
import { NavLink } from "react-router-dom";
import { games } from "../../componets/data/Data";
import { Container } from "./Homepage.styled";

const Homepage = () => {
  const [herobg, setherobg] = useState(0);
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
          <h1>${games[herobg].price}</h1>
          <div className="buttons">
            <a href={`${games[herobg].link}`} target="_blank" rel="noreferrer">
              play
            </a>
            <NavLink to="/login" className="purchase">
              purchase
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
