import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../componets/auth/Authprivider";
import { Container } from "./Admin.styled";

const Admin = () => {
  const context = useContext(AuthContext);
  const [games, setgames] = useState([]);
  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [updated, setupdated] = useState({});
  const [popup, setpopup] = useState(false);

  const fetch = async () => {
    const response = await axios.post("http://localhost:4000/fetchall");
    setgames(response.data);
    setfiltered(response.data);
  };
  const filter = () => {
    setfiltered(games.filter((item) => item.purchaseId == search));
    console.log(filtered);
  };
  const updatePay = async () => {
    const response = await axios.post(
      "http://localhost:4000/payupdate",
      updated
    );
    if (response.data == "activated") {
      fetch();
      setpopup(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <Container>
      {popup && (
        <div className="popup">
          <div className="form">
            <div className="icon">
              <MdClose className="btn" onClick={() => setpopup(false)} />
            </div>
            <input
              type="text"
              placeholder="credential"
              onChange={(e) =>
                setupdated({ ...updated, credential: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) =>
                setupdated({ ...updated, password: e.target.value })
              }
            />
            <button onClick={() => updatePay()}>update</button>
          </div>
        </div>
      )}

      <div className="navbar">
        <div className="search">
          <input
            type="text"
            placeholder="search id"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button onClick={() => filter()}>submit</button>
        </div>
        <button onClick={() => context.setlogin(false)}>logout</button>
      </div>
      <div className="games">
        {filtered.map((game, index) => {
          return (
            <div className="card" key={index} onClick={() => updatePay}>
              <p>
                <span>username</span>: {game.username}
              </p>
              <p>
                <span>email</span>:{game.email}
              </p>
              <p>
                <span>game</span>:{game.game}
              </p>
              <p>
                <span>price</span>: {game.price}
              </p>
              <p>
                <span>purchase id</span>: {game.purchaseId}
              </p>
              <p>
                <span>date</span>: {game.time}
              </p>
              <p>
                <span>credentials</span>: {game.credential}
              </p>
              <p>
                <span>password</span>: {game.password}
              </p>
              <button
                onClick={() => {
                  setupdated(game);
                  setpopup(true);
                }}
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Admin;
