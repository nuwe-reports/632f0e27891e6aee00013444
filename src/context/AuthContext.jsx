import { createContext } from "react";
import { useProvideAuth } from "../hooks/useProvideAuth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};


export { AuthContextProvider, AuthContext };
