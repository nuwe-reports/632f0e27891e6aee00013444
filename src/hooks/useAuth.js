import { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

const useRequireAuth = (redirectTo = "/login", anonRoute = false) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectUrl = anonRoute ? "/" : redirectTo
  const condition = anonRoute ? auth.user : !auth.user
  useEffect(() => {
    if (condition) {
      navigate(redirectUrl);
    }
  }, [auth,location]);
  return auth;
};

export {
    useAuth,
    useRequireAuth
}