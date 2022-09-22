import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import CharacterDetail from "./components/CharacterDetail";
import Login from "./components/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
import AnonRoute from "./routes/AnonRoute";
import FavouritesList from "./components/FavouritesList";
import Page404 from "./components/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<CharactersList />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/favs" element={<FavouritesList />} />
        </Route>
        <Route element={<AnonRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
