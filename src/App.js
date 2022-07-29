import React from "react";
import Account from "./components/Account";
import Transactions from "./components/Transactions";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="bg-slate-900 h-screen p-6 pb-0 mb-7">
      <Account></Account>
      <Transactions></Transactions>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
