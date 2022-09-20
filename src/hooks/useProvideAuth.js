import { useEffect } from "react";
import { useState } from "react";

const useProvideAuth = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(localStorage.getItem('user'))
  },[]);
  
  const login = (user) => {
    localStorage.setItem("user", user);
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };
  return {
    user,
    login,
    logout,
  };
};

export { useProvideAuth };
