import React from "react";

function Account({ balance }) {
  return (
    <div className="bg-slate-300 p-3 rounded-lg">
      <h3 className="text-3xl font-sans">Balance:</h3>
      <div>
        <p className="font-bold text-xl mt-9">{balance}C</p>
      </div>
    </div>
  );
}

export default Account;
