import React from "react";
import "./App.css";

// reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
// import Navbar from "./components/Commom/Navbar.tsx";
import Header from "./components/Commom/Header";
import Logo from "./components/Commom/Logo";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      {/* <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: 18,
          margin: 30,
        }}
      >
        Casa do Hamburguer
      </h1> */}
      <Logo />
      <Outlet />
    </div>
  );
}

export default App;
