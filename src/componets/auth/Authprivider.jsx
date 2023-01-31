import { createContext, useState } from "react";
export const AuthContext = createContext();

export const Authprivider = (props) => {
  const [user, setuser] = useState({});
  const [purchases, setpurchases] = useState([]);
  const [login, setlogin] = useState(false);
  return (
    <AuthContext.Provider
      value={{ user, setuser, purchases, setpurchases, login, setlogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
