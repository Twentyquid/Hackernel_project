import React from "react";
import Account from "./Account";
import Transactions from "./Transactions";

export default function Home() {
  return (
    <div className="bg-slate-900 h-screen p-6 pb-0 mb-7">
      <div className="text-white mb-5">
        <h1>Hello Joyal</h1>
      </div>
      <Account></Account>
      <Transactions></Transactions>
    </div>
  );
}
