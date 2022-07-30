import React from "react";
import canteenLogo from "../images/utensils-solid.svg";

function TransactionItems({ item }) {
  return (
    <div className="bg-white mt-4 rounded-lg flex justify-between items-center px-4 py-2">
      <img className="w-8 h-8" src={canteenLogo} alt="" />
      <div className="ml-9">
        <h3 className="text-slate-700">{item.name}</h3>
        <p className="text-xs text-slate-400">{item.date}</p>
      </div>
      <p className="basis-8/12 text-right">- {item.amount}</p>
    </div>
  );
}

export default TransactionItems;
