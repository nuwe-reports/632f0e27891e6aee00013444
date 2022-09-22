import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Page404() {
    const location = useLocation()
    const path = location?.state?.from?.pathname || "/characters"
  return (
    <div className="mt-8">
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to={path}>Go back to previous location</Link>
    </div>
  );
}

export default Page404;
