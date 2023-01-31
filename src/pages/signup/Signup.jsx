import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../componets/auth/Authprivider";
import Spinner from "../../componets/spinner/Spinner";
import { Container } from "./Singup.styled";

const Signup = () => {
  const context = useContext(AuthContext);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loader, setloader] = useState(false);
  const [message, setmessage] = useState({
    status: false,
    value: "",
    type: "fail",
  });

  const postUser = async () => {
    setloader(true);
    const response = await axios.post("http://localhost:4000", {
      username,
      email,
      password,
    });
    console.log(response);
    if (response.status == 202) {
      setmessage({ status: true, value: response.data.error, type: "fail" });
      setTimeout(() => {
        setloader(false);
        setmessage({ status: false, value: "", type: "fail" });
      }, 3000);
    } else if (response.status == 200) {
      setmessage({
        status: true,
        value:
          "your registration was successfull, visit you email and activate you registration to login",
        type: "success",
      });
    }
  };
  return (
    <Container>
      {loader ? <Spinner message={message} /> : null}
      <div className="overlay">
        <h2>signup</h2>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          className="submit"
          onClick={() => postUser()}
        />

        <div className="login">
          <p>
            allready registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
