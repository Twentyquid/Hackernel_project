import React from "react";
import TransactionItems from "./TransactionItems";

function Transactions() {
  return (
    <div>
      <h3 className="text-slate-100 mt-11">Transactions:</h3>
      <TransactionItems></TransactionItems>
      <TransactionItems></TransactionItems>
      <TransactionItems></TransactionItems>
      <TransactionItems></TransactionItems>
    </div>
  );
}

export default Transactions;