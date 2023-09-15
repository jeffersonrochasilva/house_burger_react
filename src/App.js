import { RecoilRoot } from "recoil";
import "./App.css";
// import { MagicSquare } from "./styles/components";

import { Outlet } from "react-router-dom";

import Header from "./components/Commom/Header";
import Logo from "./components/Commom/Logo";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Logo />
        <Outlet />
        {/* <MagicSquare squareSize={{ md: 200, sm: 100 }} /> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
