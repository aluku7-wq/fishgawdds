import { NavLink, useLocation } from "react-router-dom";
import image from "../../images/logo.png";
import { Container } from "./Navigation.styled";

const Navigation = () => {
  const location = useLocation();

  if (location.pathname.includes("auth") == true) {
    return null;
  }
  return (
    <Container>
      <div className="logo">
        <img src={image} alt="" />
        <div className="logotext">
          <h3>
            FISH<span>GAWDS</span>{" "}
          </h3>
          <p>ultimate gaming site</p>
        </div>
      </div>
      <div className="links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </Container>
  );
};

export default Navigation;
