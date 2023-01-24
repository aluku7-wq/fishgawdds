import { Link } from "react-router-dom";
import { Container } from "../signup/Singup.styled";

const Login = () => {
  return (
    <Container>
      <div className="overlay">
        <h2>Login</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" value="submit" className="submit" />

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
