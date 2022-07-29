import React from "react";
import home from "../images/house-solid.svg";
import chart from "../images/chart-simple-solid.svg";
import wallet from "../images/wallet-solid.svg";

function BottomNav() {
  return (
    <div>
      <ul>
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
