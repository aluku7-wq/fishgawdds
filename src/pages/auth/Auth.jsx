import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Spinner from "../../componets/spinner/Spinner";
import { Container } from "./Auth.styled";

export const Auth = () => {
  const message = false;
  const [activation, setactivation] = useState(false);
  const { id } = useParams();
  const activate = async () => {
    const response = await axios.post(`http://localhost:4000/update`, { id });
    if (response.status == 200) {
      setactivation(true);
    } else if (response.status == 202) {
      return <navigate to="/" />;
    }
  };

  useEffect(() => {
    activate();
  }, []);

  return (
    <Container>
      {!activation ? (
        <Spinner message={message} />
      ) : (
        <div className="response">
          <h3>you registration is now activated !</h3>
          <NavLink to="/login">login</NavLink>
        </div>
      )}
    </Container>
  );
};
