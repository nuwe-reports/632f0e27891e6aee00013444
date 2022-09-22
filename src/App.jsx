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

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:id" element={<CharacterDetail />} />
        </Route>
        <Route
          path="/login"
          element={
            <AnonRoute>
              <Login />
            </AnonRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
