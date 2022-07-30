import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Account from "./components/Account";
import Transactions from "./components/Transactions";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Wallet from "./components/Wallet";
import Login from "./components/Login";

function App() {
  let [logged, setLogged] = useState("");
  useEffect(() => {
    let user = localStorage.getItem("user");
    setLogged(user);
  }, []);
  return logged ? (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats></Stats>} />
        <Route path="/wallet" element={<Wallet></Wallet>} />
      </Routes>
      <BottomNav></BottomNav>
    </>
  ) : (
    <Login></Login>
  );
}

export default App;
