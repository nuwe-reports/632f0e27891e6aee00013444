import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logout from "../assets/logout.png";

function Layout({ children }) {
  const auth = useAuth();
  return (
    <>
      <header className="flex flex-col">
        {auth.user && (
          <>
            <nav className="items-center bg-blue-300 p-2 rounded">
              <Link to="/">Home</Link>
              <div>
                <strong>Welcome</strong>
                <span className="text-blue-500 text-xl"> {auth.user}</span>
              </div>
              <span>
                <button className="m-0 bg-inherit border-none" onClick={() => auth.logout()}>
                  <img src={logout}></img>
                </button>
              </span>
            </nav>
          </>
        )}
      </header>
      {children}
    </>
  );
}

export default Layout;
