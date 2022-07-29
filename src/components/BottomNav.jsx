import React from "react";
import home from "../images/house-solid.svg";
import chart from "../images/chart-simple-solid.svg";
import wallet from "../images/wallet-solid.svg";

function BottomNav() {
  return (
    <div>
      <ul className="flex justify-between bg-slate-900 fixed bottom-0 w-full left-0 p-3">
        <li>
          <div>
            <img src={home} alt="" />
          </div>
        </li>
        <li>
          <div>
            <img src={chart} alt="" />
          </div>
        </li>
        <li>
          <div>
            <img src={wallet} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BottomNav;
