import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { UserFavouritesProvider } from "./context/UserFavouritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserFavouritesProvider>
          <App />
        </UserFavouritesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
