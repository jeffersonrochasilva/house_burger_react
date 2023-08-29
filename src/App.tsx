import { RecoilRoot } from "recoil";
import "./App.css";

// reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Header from "./components/Commom/Header";
import Logo from "./components/Commom/Logo";
function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        {/* <Logo />  */}
        <Outlet />
      </div>
    </RecoilRoot>
  );
}

export default App;
