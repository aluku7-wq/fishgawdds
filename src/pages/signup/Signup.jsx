import { Link } from "react-router-dom";
import { Container } from "./Singup.styled";

const Signup = () => {
  return (
    <Container>
      <div className="overlay">
        <h2>signup</h2>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" value="submit" className="submit" />

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
