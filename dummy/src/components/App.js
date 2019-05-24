import React, { useState } from "react";
import logo from "../logo.svg";
import { Header } from "./layout/index";
import DashBoard from "./workouts/DashBoard";
import "./App.css";
import AuthModal from "./reusables/AuthModal";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Header />

      <div className="App-Body">
        <AuthModal />

        <DashBoard />

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
//<AuthModal open={open} />
