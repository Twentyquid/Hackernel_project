import React from "react";
import canteenLogo from "../images/utensils-solid.svg";

function TransactionItems() {
  return (
    <div className="bg-white mt-4 rounded-lg flex justify-between items-center px-4 py-2">
      <img className="w-8 h-8" src={canteenLogo} alt="" />
      <div className="ml-9">
        <h3>Canteen</h3>
        <p>May 21</p>
      </div>
      <p className="basis-8/12 text-right">-Rs 50/-</p>
    </div>
  );
}

export default TransactionItems;
