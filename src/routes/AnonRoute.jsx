import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AnonRoute({ redirectPath = "/", children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  useEffect(() => {
    if (auth.user) {
      return navigate(location.state?.from?.pathname || redirectPath);
    }
  }, [auth]);

  return children ? children : <Outlet />;
}
