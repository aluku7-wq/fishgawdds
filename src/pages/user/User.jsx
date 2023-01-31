import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../componets/auth/Authprivider";
import { games } from "../../componets/data/Data";
import { Container } from "./User.styled";

const User = () => {
  const context = useContext(AuthContext);
  const [gamepurchased, setgamepurchased] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [activetab, setactivetab] = useState(0);
  const tabs = ["games", "purchases"];
  const [purchase, setpurchase] = useState({
    username: context.user.username,
    email: context.user.email,
    game: "",
    price: "",
  });
  const gamePurchase = async () => {
    const response = await axios.post(
      "http://localhost:4000/purchase",
      purchase
    );
  };
  const fetchFunc = async () => {
    setrefresh(true);
    const response = await axios.post("http://localhost:4000/games", {
      purchase,
    });
    if (response.status == 200) {
      console.log(response);
      setgamepurchased(response.data);
      setTimeout(() => {
        setrefresh(false);
      }, 10);
    }
  };

  return (
    <Container>
      <div className="header">
        <h2>welcome {context.login ? context.user.username : null}</h2>{" "}
        <button onClick={() => context.setlogin(false)}>logout</button>
      </div>

      <div className="dashboard">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              style={{ opacity: index == activetab ? 1 : 0.4 }}
              onClick={() => {
                setactivetab(index);

                fetchFunc();
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="body">
        {activetab == 0 ? (
          <div className="games">
            {games.map((game, index) => {
              return (
                <div className="card" key={index}>
                  <div className="profile">
                    <img src={game.image} alt="" />
                    <p>{game.name}</p>
                    <p>price: ${game.price}</p>
                  </div>
                  <a
                    href={`https://cash.app/$fishgawds/${game.price}`}
                    onClick={() => gamePurchase()}
                    onMouseEnter={() =>
                      setpurchase({
                        ...purchase,
                        game: game.name,
                        price: game.price,
                      })
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    purchase
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="purchases">
            {refresh ? (
              <h1>please wait</h1>
            ) : (
              <div className="content">
                {gamepurchased.map((game, index) => {
                  return (
                    <div className="card" key={index}>
                      <p>{game.game}</p>
                      <p>${game.price}</p>
                      <p>{game.credential}</p>
                      <p>{game.password}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default User;
