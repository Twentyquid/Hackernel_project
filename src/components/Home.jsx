import React from "react";
import { useEffect, useState } from "react";
import Account from "./Account";
import Transactions from "./Transactions";
import user from "../images/user.png";

export default function Home({ balance }) {
  let [username, setUsername] = useState("");
  useEffect(() => {
    let jsonser = localStorage.getItem("user");
    let user = JSON.parse(jsonser);
    let username = user.name;
    setUsername(username);
  }, []);
  return (
    <div className="bg-white h-screen p-6 pb-0 mb-7">
      <div className="text-white mb-5 bg-indigo-500 p-7 rounded-t flex justify-between items-center rounded-3xl">
        <h1>Hello {username}</h1>
        <img className="w-6 h-6 rounded-full object-cover" src={user} alt="" />
      </div>
      <Account balance={balance}></Account>
      <Transactions></Transactions>
    </div>
  );
}
