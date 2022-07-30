import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Transactions from "./components/Transactions";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Wallet from "./components/Wallet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats></Stats>} />
        <Route path="/wallet" element={<Wallet></Wallet>} />
      </Routes>
      <BottomNav></BottomNav>
    </>
  );
}

export default App;
