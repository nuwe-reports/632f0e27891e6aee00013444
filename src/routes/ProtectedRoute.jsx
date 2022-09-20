import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ redirectPath = "/login", children }) {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (!auth.user) {
      return navigate(redirectPath);
    }
  }, [auth]);

  return children ? children : <Outlet />;
}
