import React from "react";
import "./App.css";

// reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Commom/Navbar.tsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Casa do Hamburguer</h1>
      <Outlet />
    </div>
  );
}

export default App;
