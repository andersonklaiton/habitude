import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const UserName = localStorage.getItem("userName") || "";
  const [auth, setAuth] = useState(token);
  const [username, setUsername] = useState(UserName);
  const [erro, setErro]=useState(false)

  const logIn = (data, history) => {
    api
      .post("sessions/", data)
      .then((response) => {
        localStorage.clear();
        setUsername(data.username);
        localStorage.setItem("UserName", data.username);
        localStorage.setItem("token", JSON.stringify(response.data.access));
        const tokenDecode = jwt_decode(response.data.access);
        setAuth(tokenDecode);
        history.push("/habits");
        setErro(false)
      })
      .catch((error) => console.log("não encontrado"),  history.push("/"), setErro(true) );
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logIn, username, erro }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
