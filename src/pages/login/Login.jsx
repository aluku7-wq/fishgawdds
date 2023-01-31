import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../componets/auth/Authprivider";
import Spinner from "../../componets/spinner/Spinner";
import { Container } from "../signup/Singup.styled";

const Login = () => {
  const context = useContext(AuthContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loader, setloader] = useState(false);
  const [message, setmessage] = useState({
    status: false,
    value: "",
    type: "fail",
  });
  const fetch = async () => {
    setloader(true);
    const response = await axios.post("http://localhost:4000/fetch", {
      username,
      password,
    });
    console.log(response);
    if (response.status == 202) {
      setmessage({ status: true, value: response.data.error, type: "fail" });
      setTimeout(() => {
        setloader(false);
        setmessage({ status: false, value: "", type: "fail" });
      }, 3000);
    } else if (response.data.length > 0) {
      context.setuser(response.data[0]);
      context.setlogin(true);
      setloader(false);
    }
  };
  if (context.login) {
    if (context.user.role == "admin") {
      return <Navigate to="/admin" />;
    }
    return <Navigate to="/user" />;
  }
  return (
    <Container>
      {loader ? <Spinner message={message} /> : null}
      <div className="overlay">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
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
          onClick={() => fetch()}
        />

        <div className="login">
          <p>
            Not registered? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
