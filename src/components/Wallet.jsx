import React from "react";
import { useEffect, useState } from "react";

export default function Wallet({ setBalance, balance }) {
  let [reciever, setReceiver] = useState("");
  let [amount, setAmount] = useState(0);
  console.log("balance received", balance);

  function handleChange2(e) {
    console.log(balance);
    setAmount(parseInt(e.target.value));
  }

  function handleChange(e) {
    console.log(e.target.value);
    setReceiver(e.target.value);
  }

  let result = { reciever, amount };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("balance before: ", balance);
    setBalance(parseInt(balance) - amount);
    console.log(balance);
    // fetch("", {
    //   method: "POST",
    //   body: result,
    // })
    //   .then((result) => {
    //     console.log(result);
    //     // window.location.href = "/";
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <div className="p-3 flex justify-center items-center flex-col">
      <h3 className="text-white text-2xl">Wallet</h3>
      <form onSubmit={handleSubmit}>
        <label className="text-white" htmlFor="name">
          To:
        </label>
        <br></br>

        <select onChange={handleChange} className="rounded-lg w-full">
          <option value="canteen">Canteen</option>
          <option value="monqo">Monqo</option>
          <option value="stationary">Stationary</option>
        </select>

        <br></br>
        <label className="text-white" htmlFor="email">
          Tokens:
        </label>
        <br />
        <input
          onChange={handleChange2}
          className="rounded-lg"
          //   value={email}
          //   onChange={handleChange}
          name="amount"
          id="email"
          type="text"
        />
        <br />
        <button
          className="bg-indigo-500 text-white mt-5 px-3 py-1 rounded-lg"
          type="submit"
        >
          Send
        </button>
        {/* <button onClick={handleClick} className="bg-white mt-5 p-2 ml-2">Sign up</button> */}
      </form>
    </div>
  );
}
