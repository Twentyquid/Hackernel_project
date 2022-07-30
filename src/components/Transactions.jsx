import React from "react";
import TransactionItems from "./TransactionItems";

let transactions = [
  { id: "1", name: "Canteen", amount: "50", date: "May 24" },
  { id: "2", name: "Monqo", amount: "150", date: "May 2" },
  { id: "3", name: "Stationary", amount: "30", date: "April 30" },
];

function Transactions() {
  return (
    <div className="pb-9">
      <h3 className="text-black mt-11">Transactions:</h3>
      {transactions.map((element) => {
        return (
          <TransactionItems key={element.id} item={element}></TransactionItems>
        );
      })}
    </div>
  );
}

export default Transactions;
